import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(-background);
        border: 3px solid #333;
        color: #333;
        border-radius: 0.25rem;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight: 600;
        &:hover {
            filter: brightness(0.9);
            background: #333;
            color: #fff;
        }
    }
`;
