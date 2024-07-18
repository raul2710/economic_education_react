import Questions from "./Questions";
import styled from "styled-components";
import React from "react";
import Button from '@mui/material/Button';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
`
const P = styled.p`
`

const Section = styled.section`
    // background-image: url()
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`

export default function MainPractice() {

    const [current, setCurrent] = React.useState(1)
    React.useEffect(() => {
      if (current === 13) setCurrent(1)
      document.querySelector(`#slide-${current > 12?1:current}`).scrollIntoView();
    }, [current])
  
    return(
      <Main>
        <Section className="LearnSection">
            <div className="introducao">
                <h1>Treine seus conhecimentos</h1>
                <P>
                    Aqui você poderá treinar tudo que aprendeu nas aulas anteriores
                </P>
            </div>
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}> 
                Começar 
            </Button>
        </Section>
        <Div id="slide-1">
            <Questions 
                question='1. O que é um orçamento e por que é importante para suas finanças pessoais?'

                label1='É como um mapa do tesouro, guiando você sobre onde gastar e economizar seu dinheiro para evitar surpresas e alcançar seus objetivos financeiros.' value1='A'
                label2='É uma lista de desejos que você faz para gastar todo o seu dinheiro.' value2='B'
                label3='É um plano de gasto que você segue sem revisar.' value3='C'
                label4='É um relatório financeiro que você envia ao governo anualmente.' value4='D'

                correctValue='A'
            /> 
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>
        
        <Div id="slide-2">
            <Questions
                question='2. Qual é a analogia que melhor descreve a importância da poupança?'

                label1='É como plantar uma árvore: quanto mais cedo você começar, mais cedo colherá os frutos e terá segurança financeira para o futuro.' value1='A'
                label2='É como comprar um carro novo: você terá algo de valor imediatamente.' value2='B'
                label3='É como acumular pontos em um cartão de fidelidade: você só pode usá-los depois de um certo tempo.' value3='C'
                label4='É como comprar um bilhete de loteria: você espera ganhar algo grande de repente.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>

        <Div id="slide-3">
            <Questions
                question='3. Como a diversificação de investimentos pode ser comparada a cultivar um jardim?'

                label1='Assim como você planta diferentes tipos de plantas para garantir um jardim saudável, diversificar seus investimentos ajuda a reduzir riscos e aproveitar oportunidades.' value1='A'
                label2='É como plantar a mesma flor em todos os lugares para ter um jardim colorido.' value2='B'
                label3='É como investir todo o seu dinheiro em uma única ação que você acredita ser a melhor.' value3='C'
                label4='É como comprar todas as ferramentas de jardinagem para um jardim que você nunca irá plantar.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>  

        <Div id="slide-4">
            <Questions
                question='4. Qual é a melhor maneira de gerenciar dívidas, de acordo com a analogia de limpar uma bagunça?'

                label1='Tente pagar todas as dívidas ao mesmo tempo, independentemente dos juros.' value1='A'
                label2='Comece pelas dívidas com juros mais altos para ver resultados mais rapidamente e mantenha suas finanças sob controle.' value2='B'
                label3='Ignore as dívidas pequenas e concentre-se apenas nas grandes.' value3='C'
                label4='Use cartões de crédito para pagar todas as suas dívidas imediatamente.' value4='D'

                correctValue='B'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>  

        <Div id="slide-5">
            <Questions
                question='5. Como uma boa pontuação de crédito pode ser comparada a uma reputação?'

                label1='É uma forma de exibir sua capacidade de gastar dinheiro livremente.' value1='A'
                label2='É como ganhar um prêmio em um concurso de habilidades.' value2='B'
                label3='É como ter um perfil social popular, que traz muitos seguidores.' value3='C'
                label4='Assim como uma boa reputação abre portas para melhores oportunidades, uma boa pontuação de crédito facilita a obtenção de empréstimos e garante melhores taxas de juros.' value4='D'

                correctValue='D'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div> 

        <Div id="slide-6">
            <Questions
                question='6. O que significa planejar sua aposentadoria de acordo com a analogia de construir uma fortaleza?'

                label1=' Assim como você constrói uma fortaleza sólida para garantir segurança no futuro, planejar a aposentadoria envolve economizar e investir cedo para garantir um futuro financeiro estável.' value1='A'
                label2='É como construir uma casa de férias onde você só passa o tempo quando quer.' value2='B'
                label3='É como fazer uma grande festa para celebrar a aposentadoria.' value3='C'
                label4='É gastar todo o seu dinheiro agora para aproveitar enquanto ainda trabalha.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>  

        <Div id="slide-7">
            <Questions
                question='7. Por que seguros são comparados a um guarda-chuva?'

                label1='Assim como um guarda-chuva protege você das tempestades, seguros protegem você contra perdas financeiras significativas e imprevistos.' value1='A'
                label2='É como um presente que você recebe sem necessidade de uso imediato.' value2='B'
                label3='É uma forma de investir em uma nova casa.' value3='C'
                label4='É uma maneira de gastar dinheiro para obter benefícios futuros.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div> 

        <Div id="slide-8">
            <Questions
                question='8. O que significa planejar suas finanças como traçar um roteiro?'

                label1='Um bom planejamento financeiro é como um roteiro detalhado, ajudando você a alcançar seus objetivos financeiros de forma estruturada e eficiente.' value1='A'
                label2='É como seguir qualquer plano sem considerar mudanças ou atualizações.' value2='B'
                label3='É criar uma lista de tarefas diárias sem relação com suas finanças.' value3='C'
                label4='É uma maneira de evitar o planejamento e gastar conforme desejar.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div> 

        <Div id="slide-9">
            <Questions
                question='9. O que é a renda passiva e como ela pode ser comparada a um rio?'

                label1='Assim como um rio flui constantemente, a renda passiva traz dinheiro para você sem muito esforço contínuo, contribuindo para sua independência financeira.' value1='A'
                label2='É como uma fonte de riqueza que aparece repentinamente.' value2='B'
                label3='É um investimento que requer constante atenção e trabalho.' value3='C'
                label4='É uma forma de ganhar dinheiro rapidamente e sem esforço.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>

        <Div id="slide-10">
            <Questions
                question='10. Por que a inflação é comparada a um ladrão silencioso?'

                label1='Porque a inflação reduz o valor do seu dinheiro ao longo do tempo, afetando seu poder de compra sem que você perceba imediatamente.' value1='A'
                label2='É um investimento que promete altos retornos sem riscos.' value2='B'
                label3='É uma forma de gastar dinheiro sem planejamento.' value3='C'
                label4='É uma maneira de aumentar rapidamente sua renda.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div> 

        <Div id="slide-11">
            <Questions
                question='11. Como a diversificação de investimentos pode ser comparada a misturar ingredientes em uma receita?'

                label1='Assim como misturar diferentes ingredientes cria um prato equilibrado e saboroso, diversificar seus investimentos ajuda a equilibrar riscos e maximizar ganhos.' value1='A'
                label2='É como usar apenas um ingrediente para garantir um sabor consistente.' value2='B'
                label3='É uma forma de reduzir o número de investimentos para simplificar o portfólio.' value3='C'
                label4='É uma maneira de investir todo o seu dinheiro em um único ativo.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>  

        <Div id="slide-12">
            <Questions
                question='Qual a probabilidade de voce perder no jogo do tigrinho'

                label1='Porque são custos inevitáveis que você deve planejar para minimizar seus impactos e garantir que você esteja na melhor rota financeira.' value1='A'
                label2='É uma forma de ganhar dinheiro ao longo da estrada.' value2='B'
                label3='São benefícios que você recebe ao investir em um fundo de alto rendimento.' value3='C'
                label4='São uma maneira de gastar dinheiro sem controle.' value4='D'

                correctValue='A'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Finalizar
            </Button>
        </Div>      
      </Main>  
    );
}