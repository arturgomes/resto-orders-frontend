import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
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
    async function handleCreateNewTransaction(e: FormEvent) {
        e.preventDefault();
        await createTransaction({
            title,
            category,
            amount,
            type,
        });
        clearModal();
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
                <img src={closeImg} alt="Close" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
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
                <TransactionTypeContainer>
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
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    type="text"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit" value="Cadastrar">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
