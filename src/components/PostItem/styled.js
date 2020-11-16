import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemContainer = styled.div`
    padding: 0 1.6rem;
    margin-top: 5rem;
`

export const PostItemLink = styled(AniLink)`
    text-decoration: none;
`

export const PostItemWrapper = styled.div`
    border-radius: 5px;
    width: 100%;
`

export const PostItemThumb = styled.div`
    height: 150px;
    width: 100%;
    background-color: var(--contrast);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--title);
    font-weight: 600;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const PostItemContent = styled.div`
    background-color: var(--lightBackground);
    border-radius: 5px;
    padding: 15px;
`

export const PostItemTag = styled.p`
    color: var(--text);
    font-size: .8rem;
    margin-bottom: 7px;
    margin-top: 7px;
`

export const PostItemTitle = styled.h2`
    color: var(--contrast);
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 16px;
`

export const PostItemDescription = styled.p`
    color: var(--title);
    font-size: 1rem;
    margin-bottom: 32px;
    font-weight: 300;
    line-height: 120%;
`

export const PostItemDate = styled.time`
    font-size: .840rem;
    color: var(--text);
`