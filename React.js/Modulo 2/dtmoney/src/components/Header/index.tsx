import logo from '../../Assets/logo.svg';
import { ModalCo } from '../Modal';
import { Container, Content } from './styles';

export function Header() {

    return (
        <Container>
            <Content>
                <img src={logo} alt="DT Money" />
                <button
                    type="button"
                    onClick={HeaderProps}>
                    Nova Transação
                </button>



            </Content>

        </Container>
    )
}