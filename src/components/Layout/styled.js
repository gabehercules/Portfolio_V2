import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.div`
    margin-bottom: 4rem;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
    `}
`