import styled from 'styled-components';

export const SearchBarContainer = styled.div`
    margin: 10px 0;
    background-color: #fff;
    color: var(--gray-medium);
    display: flex;
    align-items: center;
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
