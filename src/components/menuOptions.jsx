import styled from "styled-components";

// images
import estrela from "../img/estrela.png";

const Menu = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: end;
`

const Soon = styled.a`
    background-image: url(${(props)  => props.imagem });
    justify-self: flex-start;
`


export default function menuOptions(){
    return(
        <Menu>
            <Soon imagem={estrela}></Soon>
        </Menu>
    )
}
