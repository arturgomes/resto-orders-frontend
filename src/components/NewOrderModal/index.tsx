import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, OrderTypeContainer } from './styles';
import { useOrders } from '../../hooks/useOrders';
interface NewOrderModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewOrderModal({ isOpen, onRequestClose }: NewOrderModalProps) {
    const { createOrder } = useOrders();
    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);
    function clearModal() {
        setType('deposit');
        setTitle('');
        setCategory('');
        setAmount(0);
    }
    // async function handleCreateNewOrder(e: FormEvent) {
    //     e.preventDefault();
    //     await createOrder({
    //         title,
    //         category,
    //         amount,
    //         type,
    //     });
    //     clearModal();
    //     onRequestClose();
    // }
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
                {/* <img src={closeImg} alt="Close" /> */}
            </button>
            {/* <Container onSubmit={handleCreateNewOrder}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    placeholder="Valor"
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <OrderTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => setType('deposit')}
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        activeColor="red"
                        isActive={type === 'withdraw'}
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>
                </OrderTypeContainer>
                <input
                    placeholder="Categoria"
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit" value="Cadastrar">
                    Cadastrar
                </button>
            </Container> */}
        </Modal>
    );
}
