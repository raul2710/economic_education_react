import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: ${prop => ( prop.column ? "column" : "row")};;
    /* flex-flow: ${prop => ( prop.column ? "column nowrap" : "row nowrap")}; */
    align-items: center;
    gap: 5px;
`