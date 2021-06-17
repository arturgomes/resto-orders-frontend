import {
    Container,
    ContainerLogin,
    ContainerTop,
    Content,
    LoginContainer,
    TopLeft,
    TopRight,
} from './styles';

import { GlobalStyle } from '../../styles/global';
import LoginFig from '../../assets/img-bg-login.jpg';
import CocoLogo from '../../assets/logo-coco-bambu.png';
import LoginForm from '../LoginForm';
export function LoginPage() {
    return (
        <Container>
            <LoginContainer imgProp={LoginFig}>
                <Content>
                    <ContainerTop>
                        <TopLeft>
                            <h1>1</h1>
                            <p>Novo pedido</p>
                        </TopLeft>
                        <TopRight>
                            Por favor, faça o login para ver o pedido e ter
                            acesso à receita com o modo de preparo
                        </TopRight>
                    </ContainerTop>
                    <ContainerLogin>
                        <img src={CocoLogo} alt="logo" />
                        <LoginForm />
                    </ContainerLogin>
                </Content>
            </LoginContainer>
            <GlobalStyle />
        </Container>
    );
}
