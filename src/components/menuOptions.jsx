import styled from "styled-components";

// components
import Links from "./MenuOptions-components/links";
import SearchBar from "./MenuOptions-components/SerachBar";
import { Soon } from "./utilitary-components/Soon";

const Menu = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    background-color: green;
`

export default function menuOptions(){
    return(
        <Menu>
            <Soon href="#"></Soon>
            <Links/>
            <SearchBar></SearchBar>
        </Menu>
    )
}
