import styled from "styled-components"
import { Link } from "gatsby"

export const TabbarWrapper = styled.nav`
    width: 100vw;
    position: fixed;
    z-index: 3;
    bottom: 0;
`

export const TabbarGroup = styled.div`
    width: 100%;
    background-color: #121212;
    display: flex;
    padding: .8rem 0;
    justify-content: space-evenly;
`

export const TabbarLink = styled(Link)`
    display: block;
    padding: 5px;
    background-color: #141414;
    border-radius: 5px;
`

export const TabbarItem = styled.div`
    color: #E20749;
    cursor: pointer;
    position: relative;
    height: 2rem;
    width: 2rem;
`