import { useEffect } from "react";
import { api } from "../../Services";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('/transactions')
            .then(Response => console.log(Response.data))
    }, []); //função que puxa a api localmente de forma ficticia com mirageJS. mais que pode ser substituida com o AXIOS. Apos utilziar o Axios e necessario mudar o data para comando de resposta.

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
                            <td className="deposit">R$ 12.000</td>
                            <td>Desenvolvimento</td>
                            <td>07/03/2022</td>
                        </tr>

                        <tr>
                            <td>Desenvolvimento de Site</td>
                            <td className="withdraw">R$ - 12.000</td>
                            <td>Desenvolvimento</td>
                            <td>07/03/2022</td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}