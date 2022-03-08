import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <div>
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
                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>R$ 12.000</td>
                            <td>Desenvolvimento</td>
                            <td>07/03/2022</td>
                        </tr>

                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>R$ 12.000</td>
                            <td>Desenvolvimento</td>
                            <td>07/03/2022</td>
                        </tr>

                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td>R$ 12.000</td>
                            <td>Desenvolvimento</td>
                            <td>07/03/2022</td>
                        </tr>

                    </tbody>
                </table>
            </Container>
        </div>
    )
}