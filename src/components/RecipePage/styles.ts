import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    /* padding: 0 1rem; */
    justify-content: center;
    max-width: 768px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div<{ imgProp: any }>`
    height: 518px;
    background-image: url(${(props) => props.imgProp});
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: space-between;
`;

export const HeaderTop = styled.div`
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7),
        rgba(255, 0, 0, 0)
    );
    padding: 10px 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const PreparingTime = styled.div`
    line-height: 1rem;
    font-size: 12px;
    width: 180px;
    heigh: 50px;
    background-color: #fff;
    color: #000;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    img {
        heigth: 50px;
        width: 50px;
    }
`;
export const PreparingTimeImg = styled.img`
    heigth: 50px;
    width: 50px;
`;
export const PreparingTimeContainer = styled.div`
    margin-left: 10px;
`;
export const PreparingTimeSpan = styled.span`
    font-weight: 700;
    font-size: 16px;
`;

export const HeaderBottom = styled.div`
    height: 140px;
    padding: 10px 30px;

    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7),
        rgba(255, 0, 0, 0)
    );
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 32px;
        margin-bottom: 10px;
    }
    p {
        font-size: 12px;
        margin-bottom: 40px;
    }
`;

export const IngredientsContainer = styled.div`
    padding: 20px 30px;
    background-color: rgba(0, 0, 0, 0.01);
    border-bottom: 1px solid #bbb;
    h5 {
        font-size: 22px;
        margin: 20px 0;
    }
`;

export const TasksContainer = styled.div`
    padding: 20px 30px;
    /* background-color: rgba(0, 0, 0, 0.01); */
    border-bottom: 1px solid #bbb;
    h5 {
        font-size: 22px;
        margin: 20px 0;
    }
`;

export const StepContent = styled.div`
    width: 90%;
`;
export const StepTickContent = styled.div`
    width: 10%;
`;
export const TickButton = styled.button<{ color: string }>`
    width: 3em;
    height: 3em;

    background-color: ${(props) => props.color};
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 30px;
    img {
        justify-content: center;
        align-items: center;
        heigth: 1.7em;
        width: 1.7em;
    }
`;

export const Items = styled.ul`
    list-style-type: none;
`;

export const Item = styled.li`
    margin-bottom: 20px;
    display: flex;
    align-items: top;
`;

export const BottomRecipe = styled.div`
    height: 75px;
    background: #ccc;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
        font-weight: bold;
    }
    button {
        background-color: var(--orange-medium);
        padding: 8px 16px;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border: none;
        border-radius: 5px;
    }
`;
