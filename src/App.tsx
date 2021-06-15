import { useState } from 'react';
import Modal from 'react-modal';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { Recipe } from './components/Recipe';
// import { NewOrderModal } from './components/NewOrderModal';
import { GlobalStyle } from './styles/global';
import { OrdersProvider } from './hooks/useOrders';

Modal.setAppElement('#root');
export function App() {
    const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);
    function handleOpenNewOrderModal() {
        setIsNewOrderModalOpen(true);
    }
    function handleCloseNewOrderModal() {
        setIsNewOrderModalOpen(false);
    }
    return (
        <OrdersProvider>
            {/* <Header onOpenNewOrderModal={handleOpenNewOrderModal} />
            <NewOrderModal
                isOpen={isNewOrderModalOpen}
                onRequestClose={handleCloseNewOrderModal}
            /> */}
            <Router>
                <Switch>
                    <Route path="/recipe/:recipe_id" exact component={Recipe} />
                    <Route path="/">
                        <Header onOpenNewOrderModal={handleOpenNewOrderModal} />
                        <GlobalStyle />
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </OrdersProvider>
    );
}

function Home() {
    return <h2>Home</h2>;
}
