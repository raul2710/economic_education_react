import styled from "styled-components";

import MenuOptions from "./menuOptions";
import Carrousel from "./Header-Components/carrousel";


const Head = styled.header`
    width: 99vw;
    height: 90vh;
    display: grid;
    background-color: black;
    grid-template: 12% 1fr / 1fr;
    justify-items: center;
`

export default function Header(){
    return(
        <Head>
            <MenuOptions/>
            <Carrousel/>
        </Head>
    )
}