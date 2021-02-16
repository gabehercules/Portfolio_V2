import styled from "styled-components"
import media from "styled-media-query"

export const SectionWrapper = styled.section`
`

export const HeadingContent = styled.div`
    padding: 4rem 1.6rem;
    background-color: var(--lightBackground);
    border-bottom: 1px solid #070707;

    ${media.greaterThan("medium")`
        padding: 4rem 8.6rem;
    `}
`

export const ContentTitle = styled.h1`
    font-size: 3.4rem;
    color: var(--title);
    margin-bottom: 1.6rem;
    font-weight: 600;

    ${media.greaterThan("medium")`
        width: 70%;
    `}
`

export const ContentParagraph = styled.p`
    color: var(--text);
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 1.6rem;
    line-height: 120%;

    ${media.greaterThan("medium")`
        width: 70%;
        line-height: 125%;
    `}

    ${media.greaterThan("991px")`
        width: 50%;
    `}
`

export const ContentLink = styled.a`
    color: var(--contrast);
    text-decoration: none;
`