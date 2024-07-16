import styled from "styled-components";

const Pages = styled.div`
    display: flex;
    justify-content: center;
    gap: 70px;

`

const Link = styled.a`
    font-size: 20px;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`


export default function Links(){
    return(
        <Pages>
            <Link href="https://mui.com/material-ui/transitions/">Comeco</Link>
            <Link>Planejamento</Link>
            <Link>Pratica</Link>
        </Pages>

    );
}