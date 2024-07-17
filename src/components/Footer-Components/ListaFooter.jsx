import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    text-decoration: none;

`
const Options = styled.a`
    list-style: none;
    text-decoration: none;

`
export default function ListaFooter({links}) {
    return(
        <Ul>
            <li><Options href={links.link}>{links.name} </Options></li>
        </Ul>
    );
}