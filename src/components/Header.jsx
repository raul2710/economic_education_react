import styled from "styled-components";

import MenuOptions from "./menuOptions";


const Head = styled.header`
    width: 100vw;
`


export default function Header(){
    return(
        <Head>
            <MenuOptions></MenuOptions>
        </Head>
    )
}