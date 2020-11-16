import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 4.840rem;

`

export const SocialLnksList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    color: #fafafa;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--contrast);
    }
`

export const IconWrapper = styled.div`
    fill: #fafafa;
    width: 24px;
    height: 24px;
`