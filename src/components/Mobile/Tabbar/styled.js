import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

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
    padding: .8rem 0;
    justify-content: space-evenly;
`

export const TabbarLink = styled(Link)`
    display: block;
    padding: 5px;
    background-color: var(--background);
    border-radius: 5px;
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
    display: none;
`