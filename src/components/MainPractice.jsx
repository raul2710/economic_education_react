import { Divider } from "@mui/material";
import Questions from "./Questions";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Hr = styled.hr`
    color: black;
    width: 90%;
`

export default function MainPractice() {
    return(
      <Main>

        <Questions 
            question='Qual a probabilidade de voce perder no jogo do tigrinho'

            label1='Teste1' value1='Teste1'
            label2='Teste2' value2='Teste2'
            label3='Teste3' value3='Teste3'
            label4='Teste4' value4='Teste4'

            correctValue='Teste2'
        />       
        <Hr />
        <Questions 
            question='Qual a probabilidade de voce perder no jogo do tigrinho'

            label1='Teste1' value1='Teste1'
            label2='Teste2' value2='Teste2'
            label3='Teste3' value3='Teste3'
            label4='Teste4' value4='Teste4'

            correctValue='Teste2'
        />   
        <Hr />
        <Questions 
            question='Qual a probabilidade de voce perder no jogo do tigrinho'

            label1='Teste1' value1='Teste1'
            label2='Teste2' value2='Teste2'
            label3='Teste3' value3='Teste3'
            label4='Teste4' value4='Teste4'

            correctValue='Teste2'
        />        
        <Hr />
        <Questions 
            question='Qual a probabilidade de voce perder no jogo do tigrinho'

            label1='Teste1' value1='Teste1'
            label2='Teste2' value2='Teste2'
            label3='Teste3' value3='Teste3'
            label4='Teste4' value4='Teste4'

            correctValue='Teste2'
        />        

      </Main>  
    );
}