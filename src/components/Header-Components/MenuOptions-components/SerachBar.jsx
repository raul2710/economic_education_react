import styled from "styled-components";


// images
import Lupa from "../../../img/magnifyingGlass.png"

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    width: 30vw;
`

const Bar = styled.input`
    width: 90%;
`

const SearchButton = styled.button`
    background-image: url(${ Lupa });
    background-size: cover;
    width: 5%;
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