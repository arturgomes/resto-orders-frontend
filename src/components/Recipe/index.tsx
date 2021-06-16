import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-modal';
import LinearProgress from '@material-ui/core/LinearProgress';

import { useOrders } from '../../hooks/useOrders';
import { OrderModal } from '../OrderModal';

import IconBack from '../../assets/icon-back.png';
import IconTime from '../../assets/icon-time.png';
import IconCheck from '../../assets/icon-check.png';
import {
    Container,
    Header,
    HeaderTop,
    HeaderBottom,
    PreparingTime,
    PreparingTimeContainer,
    PreparingTimeImg,
    PreparingTimeSpan,
    TickButton,
    Items,
    IngredientsContainer,
    TasksContainer,
    StepContent,
    Item,
    StepTickContent,
    BottomRecipe,
} from './styles';

import PratoArroz from '../../assets/prato-arroz-grande.jpg';
import PratoBobo from '../../assets/prato-bobo-grande.jpg';
import PratoFruto from '../../assets/prato-fruto-grande.jpg';
import PratoMassa from '../../assets/prato-massa-grande.jpg';
import PratoMoqueca from '../../assets/prato-moqueca-grande.jpg';
import { GlobalStyle } from '../../styles/global';
import useTimer from '../../hooks/useTimer';

interface RecipeParamsProps {
    recipe_id: string;
}

interface Recipe {
    id: string;
    name: string;
    tag: string;
    description: string;
    ingredients: string;
    requiredTime: string;
    steps: string;
    created_at: Date;
}
interface ListProps {
    ready: boolean;
    desc: string;
}
Modal.setAppElement('#root');
export function Recipe() {
    let { recipe_id } = useParams<RecipeParamsProps>();
    const { recipes } = useOrders();
    const { timer, handleStart, handlePause } = useTimer();

    const [recipe, setRecipe] = useState<Recipe>();
    const [listIngredients, setListIngredients] = useState<ListProps[]>([]);
    const [listSteps, setListSteps] = useState<ListProps[]>([]);
    const [okIngredients, setOkIngredients] = useState(false);
    const [okSteps, setOkSteps] = useState(false);
    const [displayTime, setDisplayTime] = useState('');
    const [progressBar, setProgressBar] = useState(0);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    //once the recipe is loaded, set ingredient list and step list
    useEffect(() => {
        const [currentRecipe] = recipes.filter(
            (recipe) => recipe.id === recipe_id
        );
        if (currentRecipe) {
            setRecipe(currentRecipe);
            setListIngredients(
                JSON.parse(currentRecipe.ingredients).map(
                    (ingredient: string) => {
                        return { ready: false, desc: ingredient };
                    }
                )
            );
            setListSteps(
                JSON.parse(currentRecipe.steps).map((step: string) => {
                    return { ready: false, desc: step };
                })
            );
        }
    }, [recipes]);

    //will check if all ingredients are ticked
    useEffect(() => {
        const almostReady = listIngredients.filter(
            (ingredient) => ingredient.ready === true
        );
        if (listIngredients.length === almostReady.length) {
            setOkIngredients(true);
        } else {
            setOkIngredients(false);
        }
    }, [listIngredients]);

    //will check if all steps are done
    useEffect(() => {
        const almostReady = listSteps.filter((step) => step.ready === true);
        okIngredients && almostReady
            ? setProgressBar(
                  Math.round((100 / listSteps.length) * almostReady.length)
              )
            : setProgressBar(0);
        if (listSteps.length === almostReady.length) {
            setOkSteps(true);
        } else {
            setOkSteps(false);
        }
    }, [listSteps]);

    useEffect(() => {
        const formatTime = (timer: number) => {
            const getSeconds = `0${timer % 60}`.slice(-2);
            const getMinutes = `0${Math.floor(timer / 60)}`.slice(-2);
            const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
            return `${getHours} : ${getMinutes} : ${getSeconds}`;
        };
        setDisplayTime(formatTime(timer));
    }, [timer]);

    function handleUpdateIngredient(desc: string) {
        setListIngredients(
            listIngredients.map((item: ListProps) =>
                item.desc === desc ? { ...item, ready: true } : item
            )
        );
    }

    function handleUpdateStep(desc: string) {
        setListSteps(
            listSteps.map((item: ListProps) =>
                okIngredients && item.desc === desc
                    ? { ...item, ready: true }
                    : item
            )
        );
        const almostReady = listSteps.filter((step) => step.ready === true);
        if (listSteps.length === almostReady.length) {
            setOkIngredients(true);
        }
    }

    function handleOpenOrderModal() {
        setIsOrderModalOpen(true);
    }
    function handleCloseOrderModal() {
        setIsOrderModalOpen(false);
    }

    function handleThumbnail(tag: string) {
        switch (tag) {
            case 'arroz':
                return PratoArroz;
            case 'bobo':
                return PratoBobo;
            case 'fruto':
                return PratoFruto;
            case 'massa':
                return PratoMassa;
            case 'moqueca':
                return PratoMoqueca;
        }
    }

    if (!recipe) {
        return <h1>Loading...</h1>;
    } else
        return (
            <Container>
                <GlobalStyle />
                <Header imgProp={handleThumbnail(recipe.tag)}>
                    <HeaderTop>
                        <Link to={`/`}>
                            <img src={IconBack} alt="voltar" />
                        </Link>
                        <PreparingTime>
                            <PreparingTimeImg
                                src={IconTime}
                                alt="Tempo de Preparo"
                            />
                            <PreparingTimeContainer>
                                Tempo de preparo:{' '}
                                <PreparingTimeSpan>
                                    {recipe.requiredTime}
                                </PreparingTimeSpan>
                            </PreparingTimeContainer>
                        </PreparingTime>
                    </HeaderTop>
                    <HeaderBottom>
                        <h2>{recipe.name}</h2>
                        <p>{recipe.description}</p>
                    </HeaderBottom>
                </Header>
                <IngredientsContainer>
                    <h5>
                        Ingredientes
                        {/* {okIngredients === true && 'ok'} */}
                    </h5>
                    <Items>
                        {listIngredients.map((ingredient: ListProps) => (
                            <Item key={ingredient.desc}>
                                <TickButton
                                    color={
                                        ingredient.ready
                                            ? 'rgba(0,200,0)'
                                            : '#eee'
                                    }
                                    onClick={() =>
                                        handleUpdateIngredient(ingredient.desc)
                                    }
                                >
                                    <img src={IconCheck} alt="" />
                                    {/* {ingredient.ready && 'ok'} */}
                                </TickButton>
                                {ingredient.desc}
                            </Item>
                        ))}
                    </Items>
                </IngredientsContainer>
                <TasksContainer>
                    <h5>
                        Modo de Preparo
                        {/* {okSteps && 'ok'} */}
                    </h5>

                    <Items>
                        {listSteps.map((step: ListProps, index) => (
                            <Item key={step.desc}>
                                <StepTickContent>
                                    <TickButton
                                        color={
                                            step.ready
                                                ? 'rgba(0,200,0)'
                                                : '#eee'
                                        }
                                        onClick={() =>
                                            handleUpdateStep(step.desc)
                                        }
                                    >
                                        <img src={IconCheck} alt="" />
                                        {/* {step.ready && 'ok'} */}
                                    </TickButton>
                                </StepTickContent>

                                <StepContent>
                                    <h3>Passo {index + 1}</h3>
                                    {step.desc}
                                </StepContent>
                            </Item>
                        ))}
                    </Items>
                </TasksContainer>
                <BottomRecipe>
                    <div>
                        Status:
                        {okSteps ? (
                            <span> Prato pronto!</span>
                        ) : (
                            <>
                                <span> {progressBar} %</span> pronto e{' '}
                                {displayTime} utilizados
                            </>
                        )}
                        <LinearProgress
                            variant="determinate"
                            value={progressBar}
                        />
                    </div>
                    <button onClick={handleOpenOrderModal}>
                        Iniciar Preparo
                    </button>
                </BottomRecipe>
                <OrderModal
                    isOpen={isOrderModalOpen}
                    onRequestClose={handleCloseOrderModal}
                    okIngredients={okIngredients}
                    handleStart={handleStart}
                />
            </Container>
        );
}
