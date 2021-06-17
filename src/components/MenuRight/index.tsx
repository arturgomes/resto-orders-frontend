import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Menu, MenuItem } from './styles';
import { SiCodechef } from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';

export function MenuRight() {
    const { handleLogout } = useOrders();
    const history = useHistory();

    function handleLogoutAction(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        handleLogout();
        history.push('/');
    }
    return (
        <Container>
            <Menu>
                <MenuItem active>
                    <Link to="/orders">
                        <SiCodechef size={25} />
                        Pedidos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <IoDocumentTextOutline size={25} />
                        Receita
                    </Link>
                </MenuItem>
                <MenuItem>
                    {/* <Link to="/"> */}
                    <button onClick={handleLogoutAction}>
                        <GoPerson size={25} />
                        Sair
                    </button>
                    {/* </Link> */}
                </MenuItem>
            </Menu>
        </Container>
    );
}
