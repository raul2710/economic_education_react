import styled from "styled-components";

// images
import WelcomePicture from "../../img/WelcomePicture.png";

const WelcomeContainer = styled.div`
    display: flex;
    flex-flow: ${(props) => (
        props.column ? "column nowrap" : "row nowrap"
    )};
    justify-content: space-evenly;
    justify-content: ${props => (
        props.justify ? "center" : "space-evenly"
    )};
    gap: 20px;
`;


export default function WelcomeSection(){
    return(
        <section className="WelcomeSection">
            <h1>Bem vindo a Money Master.</h1>
            <WelcomeContainer>
                <img src={WelcomePicture} alt="imagem da secao de boas vindas" />
                <WelcomeContainer column justify>
                    <h2>Atingir seu objetivo é a nossa meta!</h2>
                    <p>Aqui acreditamos que educação financeira <br /> é a chave para uma vida mais segura e próspera.</p>
                    <p>Nossa missão é capacitar você <br /> a tomar controle de suas finanças através de conhecimento acessível <br /> e ferramentas práticas de planejamento financeiro.</p>
                </WelcomeContainer>
            </WelcomeContainer>
        </section>
    );
}