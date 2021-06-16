import React from 'react';

import { GlobalStyle } from '../../styles/global';
import { Dashboard } from '../Dashboard';
import { Header } from '../Header';

export default function Orders() {
    return (
        <>
            <Header />
            <GlobalStyle />
            <Dashboard />
        </>
    );
}
