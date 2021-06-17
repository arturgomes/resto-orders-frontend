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

export interface Order {
    id: string;
    created_at: string;
    ordered: RecipeSimple;
}
interface Login {
    user: string;
    password: string;
}
type OrderInput = Omit<Order, 'id' | 'createdAt'>;
type RecipeInput = Omit<Recipe, 'id' | 'createdAt'>;
type RecipeSimple = Omit<
    Recipe,
    'ingredients' | 'requiredTime' | 'steps' | 'created_at'
>;

interface OrdersProviderProps {
    children: ReactNode;
}

interface OrdersContextData {
    orders: Order[];
    createOrder: (order: OrderInput) => Promise<void>;
    recipes: Recipe[];
    createRecipe: (order: RecipeInput) => Promise<void>;
    login: Login;
    handleLogin: (username: string, password: string) => boolean;
    handleLogout: () => void;
    handleSearch: (searchText: string) => void;
    filter: string;
}

const OrdersContext = createContext<OrdersContextData>({} as OrdersContextData);

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [login, setLogin] = useState<Login>({ user: '', password: '' });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        api.get('recipes').then((response) => {
            setRecipes(response.data.recipes);
        });
        api.get('orders').then((response) => {
            setOrders(response.data.orders);
        });
        setLogin({ user: 'testeusername', password: 'testesenha' });
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
    function handleSearch(searchText: string) {
        setFilter(searchText);
    }
    function handleLogin(username: string, password: string) {
        console.log(username, password);
        if (login.user === username && login.password === password) {
            localStorage.setItem('@coco-bambu/login', 'true');
            return true;
        }
        return false;
    }

    function handleLogout() {
        localStorage.removeItem('@coco-bambu/login');
    }
    return (
        <OrdersContext.Provider
            value={{
                orders,
                createOrder,
                recipes,
                createRecipe,
                login,
                handleLogin,
                handleLogout,
                handleSearch,
                filter,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export function useOrders() {
    const context = useContext(OrdersContext);
    return context;
}
