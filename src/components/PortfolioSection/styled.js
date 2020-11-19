import styled from "styled-components"
import media from "styled-media-query"

export const PortfolioWrapper = styled.div`
    padding: 50px 1.6rem;
    width: 100%;
    border-radius: 10px;

    ${media.greaterThan("768px")`
        padding: 4rem 5.6rem;
    `}
`

export const PortfolioGrid = styled.div`
    display: block;
`