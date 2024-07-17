import styled from "styled-components";

// components
import Layout from "./MenuOptions-components/Links";

const Menu = styled.div`
    display: flex;
    align-items: center;
`

export default function MenuOptions(){
    return(
        <Menu>
            <Layout />
        </Menu>
    )
}
