import styled from 'styled-components';

export const Container = styled.div``;

export const Menu = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const MenuItem = styled.li<{ active?: boolean }>`
    display: flex;
    justify-content: center;
    width: 70px;
    background-color: ${(props) => (props.active ? '#fff' : 'none')};
    height: 55px;
    align-items: center;
    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 12px;
        margin: 0 6px;
        color: ${(props) => (props.active ? 'var(--orange-medium)' : '#fff')};
    }
`;
