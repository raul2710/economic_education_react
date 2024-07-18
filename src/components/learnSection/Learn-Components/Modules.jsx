import styled from "styled-components";

const ModuleDiv = styled.div`
    background-color: white;
    background-size: cover;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    box-shadow: black 1px 1px 20px;
    border-radius: 30px;
    p , h2{
        width: 190px;
        padding: 20px 70px;
    }
`

const ModuleSection = styled.section`
    margin-top: 60px;
    margin-bottom: 100px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    gap: 20px;
`

export default function LearnModule(props){
    return(
        <ModuleSection >
            <ModuleDiv>
                <h2>Orçamento</h2>
                <p>É como um <strong>mapa do tesouro.</strong> Ele guia você para onde gastar e economizar seu dinheiro, ajudando a evitar surpresas financeiras indesejadas e a <strong>alcançar seus objetivos</strong>. Pense em um mapa detalhado que mostra cada passo necessário para chegar ao seu tesouro financeiro.</p>
            </ModuleDiv>
            <ModuleDiv>
                <h2>Poupança</h2>
                <p>É como <strong>plantar uma árvore</strong>. Quanto mais cedo você plantar, mais cedo colherá os frutos. Ter uma poupança é garantir que você terá <strong>segurança financeira</strong> para o futuro e que poderá realizar seus sonhos. Automatize suas transferências para a poupança e veja sua floresta financeira crescer robusta e saudável.</p>
            </ModuleDiv>
            <ModuleDiv>
                <h2>Investir</h2>
                <p>É como cultivar um jardim. Você planta agora para colher no futuro. Diversifique seu jardim financeiro com diferentes tipos de investimentos como ações, títulos e imóveis, garantindo que seu dinheiro cresça e prospere ao longo do tempo, reduzindo riscos e <strong>aproveitando as melhores oportunidades.</strong></p>
            </ModuleDiv>
            <ModuleDiv>
                <h2>Gerenciar  dívidas</h2>
                <p>É como <strong>limpar uma bagunça</strong>. Comece pelas partes mais complicadas para ver resultados mais rapidamente. Manter suas <strong>finanças sob controle</strong> e evitar o estresse das dívidas é essencial. Priorize pagar as dívidas com juros mais altos primeiro, assim você se livra delas de forma mais eficiente.</p>
            </ModuleDiv>
        </ModuleSection>
    )

}