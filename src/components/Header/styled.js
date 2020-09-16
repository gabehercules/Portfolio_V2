import styled from "styled-components"
import { Link } from "gatsby"





export const MenuLinksWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 5rem;
    align-items: center;
    padding: 2rem 3rem;
`

export const MenuLinksList = styled.ul`
    font-weight: 300;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20rem;
`

export const MenuLinksItem = styled.li`
    padding: 0.5rem 0;

    .active {
        color: #E20749;
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