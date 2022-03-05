import entradas from '../../Assets/entradas.svg';
import saidas from '../../Assets/saidas.svg';
import total from '../../Assets/total.svg';

import { Container } from "./styles";



export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>R$ 1000</strong>
            </div>

            <div>
                <header>
                    <p>Saida</p>
                    <img src={saidas} alt="Saidas" />
                </header>
                <strong>R$ - 1000</strong>
            </div>

            <div className="fundo-destaque">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$ 1000</strong>
            </div>
        </Container>
    )
}