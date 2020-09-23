import styled from "styled-components"
import { Link } from "gatsby"


export const HeaderWrapper = styled.header`
    width: 100%;
    display: flex;
    padding: 1rem 1.6rem;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
`
export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderName = styled.div`
    margin-left: 1rem;

    h4 {
        font-size: 1.6rem;
        color: #efefef;
        font-weight: 600;
    }
`

export const MenuLinksNav = styled.nav`
    display: flex;
    justify-content: center;
    min-height: 4rem;
    align-items: center;
    display: none;
`


export const MenuLinksList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const MenuLinksItem = styled.li`
    margin-left: 2rem;

    .active {
        color: #E20749;
        font-weight: 600;
    }

    .active::after {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        display: inline-block;
        background-color: #bdbdbd;
        margin-left: 2px;
    }
`

export const MenuLinksLink = styled(Link)`
    color: #bdbdbd;
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
        background-color: #E20749;
        margin-left: 2px;
    }
`