// import styled from "styled-components";

import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main";
import WelcomeSection from "../components/WelcomeSection/WelcomeSection";

export default function Home(){
    return(
        <body className="home">
            <Header />
            <Main />
            <WelcomeSection />
            <Footer />
        </body>
    );
}

