import styled from 'styled-components';

export const Container = styled.div``;

export const OrderItem = styled.div`
    border-bottom: 1px solid #bbb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

export const DescriptionContainer = styled.div`
    margin-left: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const Title = styled.h3``;
export const Description = styled.div`
    margin-top: 20px;
    font-size: 12px;
    font-weight: 200;
`;
export const ReadyContainer = styled.div`
    margin-left: 10px;
`;
export const Ready = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: none;
    color: var(--green);
    font-size: 14px;
`;
export const InfoContainer = styled.div`
    margin-left: 10px;
`;
export const Info = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #ccc;
    font-size: 12px;
`;

export const RecipeLinkContainer = styled.div`
    margin-left: 10px;
`;
export const RecipeLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--orange-medium);
    font-size: 12px;
    a {
        text-decoration: none;
        color: #fff;
    }
`;
