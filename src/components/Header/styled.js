import styled from "styled-components"
import { Link } from "gatsby"


export const HeaderWrapper = styled.header`
    width: 100%;
`


export const MenuLinksNav = styled.nav`
    position: absolute;
    z-index: 2;
    transform: translateY(100%);
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 5rem;
    align-items: center;
    background-color: #141414;
    display: none;
`

export const MenuLinksList = styled.ul`
    font-weight: 300;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    /* width: 20rem; */
`

export const MenuLinksItem = styled.li`
    padding: 2.5rem 0;

    .active {
        color: #E20749;
    }

    .active::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 2px;
        display: inline-block;
        background-color: #bdbdbd;
        margin-left: 2px;
    }
`

export const MenuLinksLink = styled(Link)`
    color: #bdbdbd;
    font-size: 2.650rem;
    /* font-size: .95rem; */
    font-weight: 500;
    text-decoration: none;
    transition: color .5s;

    &::after {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 2px;
        display: inline-block;
        background-color: #E20749;
        margin-left: 2px;
    }
`