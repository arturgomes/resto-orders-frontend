import {
    createContext,
    ReactNode,
    useEffect,
    useState,
    useContext,
} from 'react';
import { api } from '../services/api';

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

interface Order {
    id: string;
    created_at: string;
    ordered: RecipeSimple;
}

type OrderInput = Omit<Order, 'id' | 'createdAt'>;
type RecipeInput = Omit<Recipe, 'id' | 'createdAt'>;
type RecipeSimple = Omit<
    Recipe,
    'id' | 'ingredients' | 'requiredTime' | 'steps' | 'created_at'
>;

interface OrdersProviderProps {
    children: ReactNode;
}

interface OrdersContextData {
    orders: Order[];
    createOrder: (order: OrderInput) => Promise<void>;
    recipes: Recipe[];
    createRecipe: (order: RecipeInput) => Promise<void>;
}

const OrdersContext = createContext<OrdersContextData>({} as OrdersContextData);

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        api.get('recipes').then((response) => {
            setRecipes(response.data.recipes);
        });
        api.get('orders').then((response) => {
            setOrders(response.data.orders);
        });
    }, []);

    async function createRecipe(recipeInput: RecipeInput) {
        const response = await api.post('/recipes', recipeInput);
        const { recipe } = response.data;
        setOrders([...recipes, recipe]);
    }
    async function createOrder(orderInput: OrderInput) {
        const response = await api.post('/orders', orderInput);
        const { order } = response.data;
        setOrders([...orders, order]);
    }
    return (
        <OrdersContext.Provider
            value={{ orders, createOrder, recipes, createRecipe }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export function useOrders() {
    const context = useContext(OrdersContext);
    return context;
}
