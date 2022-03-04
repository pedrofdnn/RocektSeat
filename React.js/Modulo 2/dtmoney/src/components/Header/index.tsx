import logo from '../../Assets/logo.svg';
import { Container, Content } from './styles';

export function Header(){
    return(
        <Container>
            <Content>
            <img src={logo} alt="DT Money" />
            <button type="button">Nova Transação</button>
            </Content>
        </Container>
    )
}