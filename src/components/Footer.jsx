import styled from "styled-components";

// components
import { Container } from "./utilitary-components/container";
import { Soon } from "./utilitary-components/Soon";


const FooterContainer = styled(Container)`
    background-color: #050511;
    width: 99vw;
`

export default function Footer(props) {
    return( 
        <FooterContainer>
            <Soon/>
            

            
        </FooterContainer>
    );
}