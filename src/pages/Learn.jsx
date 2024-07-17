import styled from "styled-components"

// components
import { Container } from "../components/utilitary-components/container"
import MenuOptions from "../components/menuOptions";

const LearnContainer = styled(Container)`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template: 10% 1fr 20% / 1fr;
`


export default function Learn(){
    return(
        <LearnContainer>
            <MenuOptions/>
        </LearnContainer>
    )
}