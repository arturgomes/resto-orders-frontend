import { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { Recipe } from './components/Recipe';
// import { NewOrderModal } from './components/NewOrderModal';
import { OrdersProvider } from './hooks/useOrders';
import Orders from './components/Orders';

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
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/recipe/:recipe_id" exact component={Recipe} />
                    <Route path="/orders" exact component={Orders} />
                </Switch>
            </Router>
        </OrdersProvider>
    );
}

function Home() {
    return <h2>Home</h2>;
}
