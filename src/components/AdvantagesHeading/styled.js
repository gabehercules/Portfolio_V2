import styled from "styled-components"
import media from "styled-media-query"

export const AdvantagesHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;

    ${media.greaterThan("medium")`
        flex-direction: row;
        padding: 0 8.6rem;
        justify-content: space-between;
        margin-top: 50px;
    `}
`

export const AdvantagesTitle = styled.div`
    margin-bottom: 1rem;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
        width: 30%;
    `}
`

export const AdvantagesTitleText = styled.h2`
    font-size: 2.2rem;
    color: var(--title);
    font-weight: 600;
`

export const AdvantagesSubtitle = styled.div`
    width: 100%;

    ${media.greaterThan("medium")`
        width: 60%;
    `}
`

export const AdvantagesSubtitleText = styled.p`
    color: var(--text);
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 2.6rem;
    line-height: 120%;
`