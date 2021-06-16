import SearchBar from '../SearchBar';
import { Container, Content } from './styles';
import Logo from '../../assets/logo-coco-bambu-mini.png';
import { MenuRight } from '../MenuRight';
export function Header() {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Coco Bambu" />

                <SearchBar />
                <MenuRight />
            </Content>
        </Container>
    );
}
