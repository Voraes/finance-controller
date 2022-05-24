import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransacionsTable() {
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="enter">$12000</td>
                        <td>Dev</td>
                        <td>20/01/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="leave">- $1000</td>
                        <td>Dev</td>
                        <td>20/01/2022</td>
                    </tr>
                    <tr>
                        <td>Website</td>
                        <td>$2000</td>
                        <td>Dev</td>
                        <td>20/01/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}