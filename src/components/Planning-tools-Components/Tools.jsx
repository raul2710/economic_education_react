import styled from "styled-components"

import Link from "../global/ExternalLinks"

// images
import CalculatorImage from "../../img/calculadora.png";

const ToolsContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin-top: 50px;
    gap: 30px;
`

const CalculatorContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex-flow: ${props => props.display ? "row nowrap" : "column nowrap"};
    align-items: center;
    gap: 30px;
    margin: 40px 0;
`

const H2 = styled.h2`
    margin: 30px 0 92px 0;
`
const Imagem = styled.img`
    width: 90px;
    height: 90px;
`



export default function Tools(){
    return(
        <ToolsContainer className="tools">
            <h1>Ferramentas Úteis</h1>
            <CalculatorContainer>
                <div>
                <h2>Calculadora Financeira</h2>
                <p>ferramenta util para calcular metas de investimento que planeja fazer</p>
                </div>
                <CalculatorContainer display>
                <Imagem src={CalculatorImage} alt="imagem calculadora"/>
                <Link link={{
                    url: "https://calculator-money-master.vercel.app/",
                    name: "Teste Já!",
                    color: "black"
                }} />
                </CalculatorContainer>
            </CalculatorContainer>
            <H2>mais ferramentas em breve</H2>
        </ToolsContainer>
    )
}