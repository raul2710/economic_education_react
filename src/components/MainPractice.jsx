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
    display: flex;
    
    height: 90vh;
`

export default function MainPractice() {
    
    const [current, setCurrent] = React.useState(1)
    React.useEffect(() => {
      if (current === 5) setCurrent(1)
      document.querySelector(`#slide-${current > 4?1:current}`).scrollIntoView();
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
        </Section>
        <Div id="slide-1">

            <Questions 
                question='Qual a probabilidade de voce perder no jogo do tigrinho'

                label1='A' value1='A'
                label2='B' value2='B'
                label3='C' value3='C'
                label4='D' value4='D'

                correctValue='B'
            /> 
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>
        
        <Div id="slide-2">

            <Questions
                question='Qual a probabilidade de voce perder no jogo do tigrinho'

                label1='A' value1='A'
                label2='B' value2='B'
                label3='C' value3='C'
                label4='D' value4='D'

                correctValue='B'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>
        <Div id="slide-3">
            <Questions
                question='Qual a probabilidade de voce perder no jogo do tigrinho'

                label1='A' value1='A'
                label2='B' value2='B'
                label3='C' value3='C'
                label4='D' value4='D'

                correctValue='B'
            />
            <Button sx={{ mt: 1, mr: 1}} variant="outlined" onClick={() => {
                setCurrent(cur=>cur+1)
            }}>
                Próxima
            </Button>
        </Div>    
        <Div id="slide-4">
            <Questions
                question='Qual a probabilidade de voce perder no jogo do tigrinho'

                label1='A' value1='A'
                label2='B' value2='B'
                label3='C' value3='C'
                label4='D' value4='D'

                correctValue='B'
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