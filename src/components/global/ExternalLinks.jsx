import styled from "styled-components";


const Options = styled.a`
    list-style: none;
    text-decoration: none;
    color: white;
    border: 1px solid white;
    border-radius: 20px;
    padding: 2px 10px;
    &:hover{
        background-color: white;
        color: black;
    }
`
export default function Link({link}) {
    return(
        <Options href={link.url}>{link.name}</Options>
    );
}