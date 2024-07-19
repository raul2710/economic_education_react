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
    // const drawer = (
    //     <div>
    //       <Toolbar />
    //       <Divider />
    //       <List>
    //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //           <ListItem key={text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //               </ListItemIcon>
    //               <ListItemText primary={text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //       <Divider />
    //       <List>
    //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //           <ListItem key={text} disablePadding>
    //             <ListItemButton>
    //               <ListItemIcon>
    //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //               </ListItemIcon>
    //               <ListItemText primary={text} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //     </div>
    //   );
    
    //   // Remove this const when copying and pasting into your project.
    //   const container = window !== undefined ? () => window().document.body : undefined;    

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

