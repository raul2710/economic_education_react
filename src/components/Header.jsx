import styled from "styled-components";

import MenuOptions from "./Header-Components/menuOptions";
import Carrousel from "./Header-Components/carrousel";


const Head = styled.header`
    width: 100vw;
    height: 90vh;
    display: grid;
    grid-template: 1fr 5fr / 1fr;
`

export default function Header(){
    return(
        <Head>
            <MenuOptions/>
            <Carrousel/>
        </Head>
    )
}