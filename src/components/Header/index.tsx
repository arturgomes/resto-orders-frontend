import { Container, Content } from './styles';
interface HeaderProps {
    onOpenNewOrderModal: () => void;
}
export function Header({ onOpenNewOrderModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                {/* <img src={logoImg} alt="dt money" /> */}
                <button type="button" onClick={onOpenNewOrderModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}
