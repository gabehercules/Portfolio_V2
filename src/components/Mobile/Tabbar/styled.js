import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const TabbarWrapper = styled.nav`
    width: 100vw;
    position: fixed;
    z-index: 3;
    bottom: 0;
    left: 0;

    ${media.greaterThan("medium")`
        display: none;
    `}
`

export const TabbarGroup = styled.div`
    width: 100%;
    background-color: var(--darkerBackground);
    display: flex;
    border-top: 1px solid #070707;
    padding: .8rem 0;
    justify-content: space-evenly;
`

export const TabbarLink = styled(AniLink)`
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const TabbarItem = styled.div`
    color: var(--contrast);
    cursor: pointer;
    position: relative;
    height: 2rem;
    width: 2rem;
`

export const TabbarName = styled.span`
    color: var(--text);
    font-size: .6rem;
    margin-top: 4px;
`