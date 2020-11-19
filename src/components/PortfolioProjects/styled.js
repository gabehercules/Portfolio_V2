import styled from "styled-components"




export const PortfolioLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 30px;
    overflow: hidden;

    div {
        border-radius: 10px;
    }
`