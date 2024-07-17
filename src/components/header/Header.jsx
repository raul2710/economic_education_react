import styled from "styled-components";

import MenuOptions from "../global/MenuOptions";
import { Logo } from "../global/Logo";

const Head = styled.header`
    display: flex;
    background: linear-gradient(180deg, #459D53 0%, rgba(24, 55, 29, 0.92) 67%);;
    justify-content: flex-start;
    padding: 1% 2%; //10px 30px
`
export default function Header(){
    return(
        <Head>
            <Logo />
            <MenuOptions />
        </Head>
    )
}