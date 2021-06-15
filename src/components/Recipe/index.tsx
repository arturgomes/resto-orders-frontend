import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOrders } from '../../hooks/useOrders';

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
export function Recipe() {
    let { recipe_id } = useParams<RecipeParamsProps>();
    const { recipes } = useOrders();
    const [recipe, setRecipe] = useState<Recipe>();
    const [listIngredients, setListIngredients] = useState<ListProps[]>([]);
    const [okIngredients, setOkIngredients] = useState(false);
    const [listSteps, setListSteps] = useState<ListProps[]>([]);
    const [okSteps, setOkSteps] = useState(false);

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

    useEffect(() => {
        const almostReady = listIngredients.filter(
            (ingredient) => ingredient.ready === true
        );
        console.log(almostReady.length, listIngredients.length);
        if (listIngredients.length === almostReady.length) {
            setOkIngredients(true);
        } else {
            setOkIngredients(false);
        }
    }, [listIngredients]);

    useEffect(() => {
        const almostReady = listSteps.filter(
            (ingredient) => ingredient.ready === true
        );
        console.log(almostReady.length, listSteps.length);
        if (listSteps.length === almostReady.length) {
            setOkSteps(true);
        } else {
            setOkSteps(false);
        }
    }, [listSteps]);

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
    if (!recipe) {
        return <h1>Loading...</h1>;
    } else
        return (
            <>
                <h2>{recipe.name}</h2>
                <span>{recipe.description}</span>
                <div>
                    <h5>Ingredientes {okIngredients === true && 'ok'}</h5>
                    <ul>
                        {listIngredients.map((ingredient: any) => (
                            <li key={ingredient.desc}>
                                <button
                                    onClick={() =>
                                        handleUpdateIngredient(ingredient.desc)
                                    }
                                >
                                    {ingredient.ready && 'ok'}
                                </button>
                                {ingredient.desc}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>Procedimento {okSteps && 'ok'}</h5>

                    <ul>
                        {listSteps.map((step: any) => (
                            <li key={step.desc}>
                                <button
                                    onClick={() => handleUpdateStep(step.desc)}
                                >
                                    {step.ready && 'ok'}
                                </button>
                                {step.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        );
}
