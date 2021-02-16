import styled from "styled-components"
import media from "styled-media-query"

export const BriefingWrapper = styled.section`
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

    span{
        font-weight: 600;
        color: var(--title);
    }

    ${media.greaterThan("medium")`
        width: 70%;
        line-height: 125%;
    `}

    ${media.greaterThan("991px")`
        width: 50%;
    `}
`

export const ContentAdvice = styled.div`
    h4{
        color: var(--contrast);
        font-weight: 600;
        margin-bottom: 10px;
    }

    p{
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
    }
`

export const AvisoWrapper = styled.div`
    padding: 50px 8.6rem;
    border-bottom: 1px solid #070707;

    ${media.lessThan("768px")`
        padding: 50px 1.6rem;
        `}

    h2{
        font-size: 2.2rem;
        color: var(--title);
        margin-bottom: 2.4rem;
        font-weight: 600;

        ${media.greaterThan("medium")`
            width: 70%;
        `}
    }

    p{
        color: var(--text);
        font-size: .9rem;
        font-weight: 400;
        margin-bottom: 1.6rem;
        line-height: 120%;

        a{
            color: var(--contrast);
        }

        ${media.greaterThan("medium")`
            width: 70%;
            line-height: 125%;
        `}

        ${media.greaterThan("991px")`
            width: 50%;
        `}
    }
`