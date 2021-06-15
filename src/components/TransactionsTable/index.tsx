import { useOrders } from '../../hooks/useOrders';
import { Container } from './styles';

export function TransactionTable() {
    const { orders, recipes } = useOrders();
    console.log(orders, recipes);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.title}</td>
                            <td className={order.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(order.amount)}
                            </td>
                            <td>{order.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(order.createdAt)
                                )}
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </Container>
    );
}
