import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemLink = styled(AniLink)`
    text-decoration: none;
    background-color: var(--lightBackground);

    border-radius: 10px;
    transition: background ease-in 300ms;

    &:hover {
        background-color: #202020;
    }
`

export const PostItemWrapper = styled.div`
    border-radius: 10px;
    width: 100%;

    ${media.greaterThan("600px")`
        display: grid;
        grid-template-columns: 220px auto;
        margin-bottom: 0;
    `}
`

export const PostItemThumb = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--title);
    font-weight: 600;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    ${media.greaterThan("600px")`
    height: auto;
    border-radius: 10px;
    `}
`

export const PostItemContent = styled.div`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 15px;

    ${media.greaterThan("600px")`
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 10px;
    border-top-right-radius: 10px;
    `}
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