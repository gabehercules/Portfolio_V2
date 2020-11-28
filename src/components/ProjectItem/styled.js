import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProjectItemLink = styled(AniLink)`
    text-decoration: none;
    background-color: var(--lightBackground);

    border-radius: 10px;
    transition: background ease-in 300ms;

    &:hover {
        background-color: #202020;
    }
`

export const ProjectItemWrapper = styled.div`
    border-radius: 10px;
    width: 100%;

    ${media.greaterThan("600px")`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr clamp(100px, 130px, 160px);
    margin-bottom: 0;
    `}
`

export const ProjectItemThumb = styled.div`
    height: 150px;
    width: 100%;
    background-color: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: var(--text);
    font-weight: 600;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    ${media.greaterThan("600px")`
        height: clamp(220px, 310px, 350px);
    `}
`

export const ProjectItemContent = styled.div`
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

export const ProjectItemTag = styled.p`
    color: var(--text);
    font-size: .8rem;
    margin-bottom: 7px;
    margin-top: 7px;
`

export const ProjectItemTitle = styled.h2`
    color: var(--contrast);
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 16px;
`

export const ProjectItemDescription = styled.p`
    color: var(--title);
    font-size: 1rem;
    margin-bottom: 32px;
    font-weight: 300;
    line-height: 120%;
`

export const ProjectItemDate = styled.time`
    font-size: .840rem;
    color: var(--text);
`