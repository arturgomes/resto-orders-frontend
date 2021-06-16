import React from 'react';
import { Container, Menu, MenuItem } from './styles';
import { SiCodechef } from 'react-icons/si';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { Link } from 'react-router-dom';

export function MenuRight() {
    return (
        <Container>
            <Menu>
                <MenuItem active>
                    <Link to="/">
                        <SiCodechef size={25} />
                        Pedidos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/">
                        <IoDocumentTextOutline size={25} />
                        Receita
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/">
                        <GoPerson size={25} />
                        Sair
                    </Link>
                </MenuItem>
            </Menu>
        </Container>
    );
}
