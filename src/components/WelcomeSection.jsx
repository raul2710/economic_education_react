import styled from "styled-components";

// components
import { Title, SubTitle, Paragraph } from "./Header-Components/Text-Components/Components";

// images
import welcomePicture from "../img/WelcomePicture.png";

const Container = styled.div`
    width: max-content;
    display: flex;
    flex-flow: ${prop => ( prop.column ? "column nowrap" : "row nowrap")};
    align-items: center;
`

const WelcomePicture = styled.img`
    width: max-content;
`


export default function WelcomeSection(){
    return(
        <Container column maxW>
            <Title>Bem vindo ao Money Master</Title>
            <Container>
                <WelcomePicture 
                    src={welcomePicture}
                    alt="Welcome image"
                />
                <Container column>
                    <SubTitle>Atingir seu objetivo é a nossa meta!</SubTitle>
                    <Paragraph>Aqui acreditamos que educação financeira é a chave para uma vida mais segura e próspera.</Paragraph>
                    <Paragraph>Nossa missão é capacitar você a tomar controle de suas finanças através de conhecimento acessível e ferramentas práticas de planejamento financeiro.</Paragraph>
                </Container>
            </Container>
        </Container>
    );
}