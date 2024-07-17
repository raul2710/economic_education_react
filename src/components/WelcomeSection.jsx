import styled from "styled-components";

// components
import { Title, SubTitle, Paragraph } from "./utilitary-components/Text-Components/Components";

// images
import welcomePicture from "../img/WelcomePicture.png";

const Container = styled.div`
    
`

const WelcomePicture = styled.img`
`

export default function WelcomeSection(){
    return(
        <Container>
            <Container column>
                <Title>Bem vindo ao Money Master</Title>
                <WelcomePicture 
                    src={welcomePicture}
                    alt="Welcome image"
                />
            </Container>
            <Container column>
                <SubTitle>Atingir seu objetivo é a nossa meta!</SubTitle>
                <Paragraph>Aqui acreditamos que educação financeira é a chave para uma vida mais segura e próspera.</Paragraph>
                <Paragraph>Nossa missão é capacitar você a tomar controle de suas finanças através de conhecimento acessível e ferramentas práticas de planejamento financeiro.</Paragraph>
            </Container>
        </Container>
    );
}