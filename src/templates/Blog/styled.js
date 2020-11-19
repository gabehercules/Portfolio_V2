import styled from "styled-components"
import media from "styled-media-query"

export const PostItemContainer = styled.div`
    padding: 0 1.6rem;

    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    row-gap: 50px;

    ${media.greaterThan("768px")`
        padding: 4rem 5.6rem;
    `}
`