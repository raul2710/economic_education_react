import styled from "styled-components";

import { Container } from "../utilitary-components/container";


// images
import Lupa from "../../img/magnifyingGlass.png"


const Bar = styled.input`
    width: 90%;
`

const SearchButton = styled.button`
    background-image: url(${ Lupa });
    background-size: cover;
    width: 10%;
    height: 20px;
`

export default function SearchBar(){
    return(
        <Container>
            <Bar>
            </Bar>
            <SearchButton/>
        </Container>
    );
}