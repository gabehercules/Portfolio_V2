import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    height: 500px;

`

export const SocialLnksList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    color: #fafafa;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #E20749;
    }
`

export const IconWrapper = styled.div`
    fill: #fafafa;
    width: 30px;
    height: 30px;
`