import styled from "styled-components"
import media from "styled-media-query"

export const PortfolioWrapper = styled.div`
    padding: 50px 1.6rem;
    width: 100%;
    border-radius: 10px;

    ${media.greaterThan("768px")`
        padding: 4rem 8.6rem;
    `}
`

export const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-gap: 50px;

    ${media.greaterThan("large")`
        grid-template-columns: 1fr 1fr;
    `}
`