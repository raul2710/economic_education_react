import { /*Outlet,*/ Link } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 0px 15%;
`
const Ul = styled.ul`
    display: flex;
    gap: 70px;
    list-style: none;
`

const Li = styled.li`
`

const StyledLink = styled(Link)`
    // text-decoration: none;
    color: #FFFFFF;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default function Layout(){
    return( 
        <Nav>
            <Ul>
                <Li>
                    <StyledLink to="/">Começo</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/learn">Aprender</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/practice">Praticar</StyledLink>
                </Li>
                <Li>
                    <StyledLink to="/planning">Planejamento</StyledLink>
                </Li>
            </Ul>
        </Nav>
        
        // <Outlet />
    )
}