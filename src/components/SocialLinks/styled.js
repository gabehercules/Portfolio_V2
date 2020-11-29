import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;

`

export const SocialLnksList = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const SocialLinksItem = styled.li`
    margin-left: 1.6rem;
`

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