import styled from 'styled-components';
export const Container = styled.div`
    margin: 0;
    left: 0;
    top: 0;
    background-color: #000;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; /*centers items on the line (the x-axis by default)*/
    align-items: center; /*centers items on the cross-axis (y by default)*/
`;
export const LoginContainer = styled.div<{ imgProp: any }>`
    width: 768px;
    height: 100%;
    background-image: url(${(props) => props.imgProp});
`;
export const Content = styled.div`
    margin: 10%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const ContainerTop = styled.div`
    width: 360px !important;
    height: 120px !important;
    background-color: #eee;
    border-radius: 5px;
    position: relative;
    display: flex;

    &:after {
        content: '';
        position: absolute;
        top: 75%;
        left: 50%;
        margin-left: -50px;
        width: 0;
        height: 0;
        border-top: solid 50px #eee;
        border-left: solid 50px transparent;
        border-right: solid 50px transparent;
    }
`;
export const TopLeft = styled.div`
    margin: 10px 20px;
    display: flex;
    width: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--orange-medium);
    h1 {
        font-size: 50px;
        font-weight: 900;
    }
    p {
        font-size: 12px;
    }
    padding-right: 20px;
    border-right: solid 1px #ddd;
`;
export const TopRight = styled.div`
    font-size: 12px;
    font-style: italic;
    color: #777;
    margin: 30px 10px;
`;

export const ContainerLogin = styled.div`
    margin: 10%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin-bottom: 30px;
    }
`;

export const LoginBottom = styled.div`
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
