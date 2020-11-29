import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const FooterWrapper = styled.footer`
    display: none;

    ${media.greaterThan("large")`
        padding: 1rem 8.6rem;
    `}

    ${media.greaterThan("medium")`
        width: 100%;
        display: flex;
        padding: 1rem 1.6rem;
        justify-content: space-between;
        align-items: center;
        background-color: var(--lightBackground);
        flex-direction: row;
    `}
`

export const MenuLinksNav = styled.nav`
    justify-content: center;
    min-height: 4rem;
    align-items: center;
    display: none;

    ${media.greaterThan("medium")`
        display: flex;
    `}
`


export const MenuLinksList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const MenuLinksItem = styled.li`
    margin-right: 2rem;

    .active {
        color: var(--contrast);
        font-weight: 400;
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--text);
    font-size: .82rem;
    font-weight: 400;
    text-decoration: none;
    transition: color .5s;
`

export const CopyrightWrapper = styled.div`

    margin-bottom: 1.2rem;
    
    p {
        font-size: .82rem;
        color: var(--text);
        text-align: center;
        line-height: 120%;
    }
    a {
        text-decoration: none;
        color: var(--contrast);
    }
`

export const FooterSocialItems = styled.div`
    display: block;
`