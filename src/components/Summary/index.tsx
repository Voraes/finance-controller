import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";


export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="income" />
                </header>
                <strong>- $ 500</strong>
            </div>
            <div className="green-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="income" />
                </header>
                <strong>$ 500</strong>
            </div>
        </Container>
    );
}