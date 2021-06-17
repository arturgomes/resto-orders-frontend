import Modal from 'react-modal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';

import { OrdersProvider } from './hooks/useOrders';
import Orders from './components/Orders';
import { RecipePage } from './components/RecipePage';

Modal.setAppElement('#root');
export function App() {
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
                    <Route
                        path="/recipe/:recipe_id"
                        exact
                        component={RecipePage}
                    />
                    <Route path="/orders" exact component={Orders} />
                </Switch>
            </Router>
        </OrdersProvider>
    );
}
