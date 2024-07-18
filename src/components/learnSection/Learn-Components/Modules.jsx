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
    margin-bottom: 40px;
    display: flex;
    flex-flow: ${props => props.display ? "column nowrap" : "row nowrap"};
    justify-content: space-evenly;
    gap: 20px;
`



export default function LearnModule(props){
    return(
        <ModuleSection display>
            <ModuleSection>
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
            <ModuleSection>
                <ModuleDiv>
                    <h2>pontuação de crédito</h2>
                    <p>é como sua reputação. Uma boa reputação abre portas para <strong>melhores oportunidades</strong>. Ter uma pontuação de crédito alta facilita a obtenção de empréstimos e garante melhores taxas de juros. Mantenha um bom histórico de pagamentos e preserve sua "reputação" financeira.
                    </p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>aposentadoria</h2>
                    <p>é como construir uma fortaleza. Você quer uma estrutura sólida e segura <strong>para viver confortavelmente no futuro</strong>. Comece a economizar cedo para garantir uma aposentadoria tranquila e financeiramente estável. Fortaleça sua "fortaleza" financeira <strong>com contribuições regulares e investimentos sólidos</strong>.</p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>Seguros</h2>
                    <p>são como um guarda-chuva. Eles protegem você das <strong>tempestades financeiras inesperadas</strong>. Ter seguros adequados para saúde, vida, carro e casa é essencial para proteger contra perdas significativas e imprevistos. Certifique-se de estar sempre preparado para qualquer eventualidade.</p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>Planejar</h2>
                    <p> é como traçar um roteiro. Um bom planejamento financeiro leva você do ponto A ao ponto B de maneira eficiente. Ajuda a <strong>alcançar seus objetivos</strong> financeiros de forma organizada e estruturada. Revise e ajuste seu "roteiro" regularmente para se manter no caminho certo e evitar desvios.</p>
                </ModuleDiv>
            </ModuleSection>
            <ModuleSection>
                <ModuleDiv>
                    <h2>Renda passiva</h2>
                    <p>é como um rio que flui constantemente. Ela traz dinheiro para você <strong>sem muito esforço contínuo</strong>, contribuindo para sua independência financeira. Invista em ativos que geram renda passiva, como imóveis e dividendos de ações, e aproveite o <strong>fluxo constante de dinheiro</strong>.</p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>Inflação</h2>
                    <p>é como um ladrão silencioso. Ela reduz o valor do seu dinheiro ao longo do tempo, <strong>afetando seu poder de compra</strong>. Invista em ativos que superem a inflação para proteger seu patrimônio e garantir que seu dinheiro mantenha seu valor.
                    </p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>Diversificar</h2>
                    <p>é como misturar ingredientes em uma receita. Quanto mais variados os ingredientes, <strong>mais equilibrado e saboroso será o resultado</strong>. Distribua seus investimentos em diferentes áreas para minimizar perdas e maximizar ganhos, garantindo um portfólio financeiro saudável.
                    </p>
                </ModuleDiv>
                <ModuleDiv>
                    <h2>Taxas e impostos</h2>
                    <p>são como pedágios em uma estrada. Inevitáveis, mas planejar pode reduzir o custo. Entender as implicações fiscais de diferentes tipos de renda e investimentos é crucial para otimizar seus retornos líquidos e <strong>garantir que você esteja sempre na melhor rota financeira</strong>.</p>
                </ModuleDiv>
            </ModuleSection>
        </ModuleSection>
    )

}