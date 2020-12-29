import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    padding: 1rem 1.6rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lightBackground);

    ${media.greaterThan("medium")`
        padding: 1rem 8.6rem;
    `}
`
export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderName = styled.div`
    margin-left: 1rem;

    span{
        color: var(--contrast);
        font-weight: 600;
        margin-left: 1rem;
    }

    h5 {
        font-size: 1rem;
        color: var(--title);
        font-weight: 300;
    }
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
    margin-left: 2rem;

    .active {
        color: var(--contrast);
        font-weight: 600;
    }

    .active::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        display: inline-block;
        background-color: var(--text);
        margin-left: 2px;
    }
`

export const MenuLinksLink = styled(AniLink)`
    color: var(--text);
    font-size: .95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color .5s;

    &::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        display: inline-block;
        background-color: var(--contrast);
        margin-left: 2px;
    }
`