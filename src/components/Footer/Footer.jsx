
// components
import styled from "styled-components";
import { Logo } from "../global/Logo";
import ListLinks from "./footer-components/LinksList";

const LogoFooter = styled(Logo)`
    width: 200px;
    height: 65px;
`

const FooterContainer = styled.section`
    padding: 30px 0 ;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    gap: 30px;
`


export default function Footer() {
    return( 
        <footer className="footer">
            <FooterContainer>
                <LogoFooter/>
                <ListLinks/>
            </FooterContainer>
        </footer>
    );
}