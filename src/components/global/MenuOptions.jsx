import styled from "styled-components";

// components
import Layout from "./MenuOptions-components/Links";

const Menu = styled.div`
    display: flex;
    align-items: center;
    margin: 0 550px 0 0;
`

export default function MenuOptions(){
    return(
        <Menu>
            <Layout />
        </Menu>
    )
}
