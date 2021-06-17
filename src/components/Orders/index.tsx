import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalStyle } from '../../styles/global';
import { Dashboard } from '../Dashboard';
import { Header } from '../Header';

export default function Orders() {
    const history = useHistory();

    useEffect(() => {
        const login = localStorage.getItem('@coco-bambu/login');
        login !== 'true' && history.push('/');
    }, []);
    return (
        <>
            <Header />
            <GlobalStyle />
            <Dashboard />
        </>
    );
}
