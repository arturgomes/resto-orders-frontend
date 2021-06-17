import React, { FormEvent } from 'react';
import Modal from 'react-modal';
import CloseImg from '../../assets/icon-close.png';
import { Container } from './styles';
interface OrderModalProps {
    isOpen: boolean;
    okIngredients: boolean;
    okSteps: boolean;
    handleFinishOrderModal: () => void;
    onRequestClose: () => void;
    handleStart: () => void;
}
export function OrderModal({
    isOpen,
    onRequestClose,
    okIngredients,
    okSteps,
    handleStart,
    handleFinishOrderModal,
}: OrderModalProps) {
    async function handleStartOrder(e: FormEvent) {
        e.preventDefault();
        handleStart();
        onRequestClose();
    }
    return (
        <Modal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Close" />
            </button>
            {!okIngredients && (
                <Container onSubmit={onRequestClose}>
                    <p>
                        Para iniciar a preparação, certifique-se que você tem
                        todos os ingredientes selecionados.
                    </p>

                    <button type="submit" value="Entendi">
                        Entendi
                    </button>
                </Container>
            )}
            {okIngredients && !okSteps && (
                <Container onSubmit={handleStartOrder}>
                    <p>
                        Os ingredientes foram selecionados. Agora podemos
                        começar.
                    </p>
                    <button type="submit" value="Começar">
                        Começar agora
                    </button>
                </Container>
            )}
            {okSteps && okIngredients && (
                <Container onSubmit={handleFinishOrderModal}>
                    <p>O prato foi finalizado!</p>

                    <button type="submit" value="Entendi">
                        Entendi
                    </button>
                </Container>
            )}
        </Modal>
    );
}
