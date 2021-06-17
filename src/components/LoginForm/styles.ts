import styled from 'styled-components';

export const LoginBottom = styled.form`
    width: 240px;
    button {
        background-color: var(--orange-medium);
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
        width: 100%;
        color: #fff;
        border: none;
    }
`;

export const FieldContainer = styled.div`
    margin: 10px 0;
    height: 50px;

    background-color: #fff;
    color: var(--gray-medium);
    display: flex;
    align-items: center;
    img {
        margin: 0 5px;
    }
    input {
        border: none;
        width: 300px;
        margin: 0 5px;
        outline: none;
        ::placeholder {
            font-style: italic;
        }
    }
`;
