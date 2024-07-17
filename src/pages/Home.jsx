import styled from "styled-components";

import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import Footer from "../components/Footer";

const HomeContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 99vw;
`

export default function Home(){
    return(
        <HomeContainer>
            <Header/>
            <WelcomeSection/>
            <Footer/>
        </HomeContainer>
    );
}

