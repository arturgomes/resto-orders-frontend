import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { FieldContainer, LoginBottom } from '../LoginForm/styles';
import LoginImg from '../../assets/icon-login.png';
import KeyImg from '../../assets/icon-key.png';
import { useOrders } from '../../hooks/useOrders';

export default function LoginForm() {
    const history = useHistory();
    const { handleLogin } = useOrders();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setUserName(e.target.value);
    }

    const handleLoginPage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const logged = handleLogin(userName, password);

        logged && history.push('/orders');
    };

    return (
        <LoginBottom onSubmit={handleLoginPage}>
            <FieldContainer>
                <img src={LoginImg} alt="Login" />

                <input
                    type="text"
                    value={userName}
                    onChange={handleUserName}
                    placeholder="Nome do usuário"
                />
            </FieldContainer>
            <FieldContainer>
                <img src={KeyImg} alt="Chave" />

                <input
                    type="text"
                    value={password}
                    onChange={handlePassword}
                    placeholder="Senha"
                />
            </FieldContainer>
            <button>Acessar</button>
        </LoginBottom>
    );
}
