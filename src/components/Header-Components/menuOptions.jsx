import styled from "styled-components";

// images
import Logo from "../../img/Rectangle.png";

// components
import Links from "./MenuOptions-components/links";
import SearchBar from "./MenuOptions-components/SerachBar";

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

const Soon = styled.a`
    background-image: url(${ Logo });
    background-size: cover;
    width: 150px;
    height: 50px;

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
