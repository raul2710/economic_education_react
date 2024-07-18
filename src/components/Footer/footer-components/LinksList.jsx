import styled from "styled-components";

import ExternalLinks from "../../global/ExternalLinks";

const Ul = styled.ul`
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: start;
    justify-content: space-between;
    gap: 50px;
    ol{
        display: flex;
        flex-flow: column nowrap;
        gap: 10px;
        h3{
            color: white;
        }
        p{
            width: max-content;
            color: white;
        }
    }
`

const FooterContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
`


export default function ListLinks(props){
    return(
        <Ul>
            <ol>
                <h3>Developers</h3>
                <FooterContainer>
                    <ExternalLinks link={{
                        url: "https://www.linkedin.com/in/bruno-adriano-275bb32b8/",
                        name: "Bruno adriano",
                        color: "white"
                    }}></ExternalLinks>
                    <ExternalLinks link={{
                        url: "linkedin.com/in/ulisses-luz",
                        name: "ulisses luz",
                        color: "white"
                    }}></ExternalLinks>
                    <ExternalLinks link={{
                        url: "https://www.linkedin.com/in/raul-tavares/",
                        name: "raul tavares",
                        color: "white"
                    }}></ExternalLinks>
                </FooterContainer>
            </ol>
            <ol>
                <h3>Sobre Nós</h3>
                <p>Somos alunos do programa tecjovem<br/>e como projeto final do curso<br />nos foi proposto a criacao deste site</p>
            </ol>
            <ol>
                <h3>Raul Tavares</h3>
                <p>estudante back-end <br /> C | C++ | Java</p>
            </ol>
            <ol>
                <h3>Bruno Adriano</h3>
                <p>estudante back-end <br /> Python | Javascript | Java</p>
            </ol>
            <ol>
                <h3>Ulisses Luz</h3>
                <p>estudante front-end <br /> javascript | python</p>
            </ol>
        </Ul>

    )
}