import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const HeroSectionWrapper = styled.section`
    background-color: var(--lightBackground);
    min-height: 70vh;
    padding-bottom: 4rem;
    padding-top: 4rem;
    border-bottom: 1px solid #070707;
`

export const HeroContainer = styled.div`
    width: 100%;
    padding: 0 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;

    ${media.greaterThan("medium")`
        padding: 0 8.6rem;
    `}

    ${media.greaterThan("991px")`
        width: 100%;
    `}
`

export const HeroValor = styled.h1`
    font-size: 3.2rem;
    color: var(--title);
    margin-bottom: 2.6rem;
    font-weight: 600;
    line-height: 120%;

    ${media.lessThan("600px")`
        font-size: 3.14rem;
    `}

    ${media.greaterThan("medium")`
        font-size: 4.4rem;
    `}

    ${media.greaterThan("991px")`
    font-size: 5.4rem;
    `}
`

export const HeroSpan = styled.span`
    color: var(--contrast);
`

export const HeroDescription = styled.p`
    color: var(--text);
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 2.6rem;
    line-height: 120%;

    ${media.greaterThan("medium")`
        width: 100%;
    `}

    ${media.greaterThan("991px")`
        width: 60%;
    `}
`
export const HeroCTA = styled(AniLink)`
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    transition: 300ms ease-out;
    color: var(--text);
    background-color: var(--darkerBackground);
    text-decoration: none;
`

export const BtnSpan = styled.span`
    height: 12px;
    vertical-align: middle;
    margin-left: .9rem;
    color: var(--contrast);

    svg {
        width: 22px;
    }
`