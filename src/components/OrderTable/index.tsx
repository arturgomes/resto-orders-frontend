import { Link } from 'react-router-dom';
import { Order, useOrders } from '../../hooks/useOrders';
import {
    OrderItem,
    Container,
    DescriptionContainer,
    Title,
    Description,
    Info,
    InfoContainer,
    RecipeLinkContainer,
    RecipeLink,
    ReadyContainer,
    Ready,
} from './styles';
import PratoArroz from '../../assets/prato-arroz-marisco-peq.jpg';
import PratoBobo from '../../assets/prato-bobo-peq.jpg';
import PratoFruto from '../../assets/prato-fruto-peq.jpg';
import PratoMassa from '../../assets/prato-massa-peq.jpg';
import PratoMoqueca from '../../assets/prato-moqueca-peq.jpg';
export function OrderTable() {
    const { orders, recipes, filter } = useOrders();
    console.log(orders, recipes);
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
    function renderItem(order: Order) {
        return (
            <OrderItem key={order.id}>
                <img
                    src={handleThumbnail(order.ordered.tag) || ''}
                    alt={order.ordered.name}
                />
                <DescriptionContainer>
                    <Title>{order.ordered.name}</Title>
                    <Description>{order.ordered.description}</Description>
                </DescriptionContainer>
                <ReadyContainer>
                    <Ready>Prato Finalizado</Ready>
                </ReadyContainer>
                <InfoContainer>
                    <Info>
                        {new Intl.DateTimeFormat('pt-BR', {
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric',
                            hour12: false,
                        }).format(new Date(order.created_at))}
                    </Info>
                </InfoContainer>
                <RecipeLinkContainer>
                    <RecipeLink>
                        <Link
                            to={`/recipe/${order.ordered.id}`}
                            // className="btn btn-primary"
                        >
                            Ver Receita
                        </Link>
                    </RecipeLink>
                </RecipeLinkContainer>
            </OrderItem>
        );
    }
    function displayOrders() {
        if (filter) {
            return orders
                .filter(
                    (order) =>
                        order.ordered.name
                            .toLowerCase()
                            .includes(filter.toLowerCase()) ||
                        order.ordered.description
                            .toLowerCase()
                            .includes(filter.toLowerCase())
                )
                .map(renderItem);
        } else return orders.map(renderItem);
    }

    if (!orders) {
        return <div>Carregando...</div>;
    } else return <Container>{displayOrders()}</Container>;
}
