import styled from "styled-components"
import media from "styled-media-query"


export const WorkHeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.6rem;

    ${media.greaterThan("medium")`
        flex-direction: row;
        padding: 0 5.6rem;
        justify-content: space-between;
    `}
`

export const WorkTitle = styled.div`
    margin-bottom: 1rem;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
        width: 30%;
    `}
`

export const WorkTitleText = styled.h2`
    font-size: 2.2rem;
    color: var(--title);
    font-weight: 600;
`

export const WorkSubtitle = styled.div`
    width: 100%;

    ${media.greaterThan("medium")`
        width: 60%;
    `}
`

export const WorkSubtitleText = styled.p`
    color: var(--text);
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 2.6rem;
    line-height: 125%;
`