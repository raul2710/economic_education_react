import { Link } from "react-router-dom";

import styled from "styled-components";

const Pages = styled.div`
    display: flex;
    justify-content: center;
    gap: 70px;
    overflow-y: hidden;
`

// const Link = styled.a`
//     font-size: 20px;
//     text-decoration: none;
//     &:hover{
//         text-decoration: underline;
//     }
// `


export default function Links(){
    return(
        <Pages>
            <Link to="/">Comeco</Link>
            <Link to="/Learn">aprender</Link>
            <Link to="/Practice">Pratica</Link>
        </Pages>

    );
}