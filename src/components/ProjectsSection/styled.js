import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const ProjectsWrapper = styled.section`
    padding: 50px 1.6rem;

    ${media.greaterThan("medium")`
        padding: 50px 8.6rem 100px 8.6rem;
    `}
`

export const ProjectsTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.8rem;

    ${media.greaterThan("medium")`
        flex-direction: row;
        justify-content: space-between;
    `}
`

export const ProjectsHeading = styled.h2`
    font-size: 2.2rem;
    color: var(--title);
    margin-bottom: 2.4rem;
    font-weight: 600;
`

export const ProjectsBtnBudget = styled(AniLink)`
    padding: 10px 20px;
    background-color: var(--contrast);
    border-radius: 5px;
    display: inline-block;
    transition: 300ms ease-out;
    color: var(--title);
    text-decoration: none;
`

export const BudgetSpan = styled.span`
    height: 12px;
    vertical-align: middle;
    margin-left: .9rem;
    color: var(--background);

    svg {
        width: 22px;
    }
`

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 60px;

    ${media.lessThan("991px")`
        grid-gap: 30px;
    `}

    ${media.lessThan("768px")`
        display: block;
    `}
`

export const ProjectsLink = styled(AniLink)`
    background-color: var(--darkerBackground);
    border: 2px solid #070707;
    border-radius: 10px;
    transition: .4s ease-in;
    overflow: auto;
    display: block;


    &:hover {
        border-color: var(--contrast);
    }

    ${media.lessThan("768px")`
        margin-bottom: 50px;
    `}
`

export const ProjectsImg = styled.div`
    width: 270px;
    height: 270px;
    border-radius: 5px;
    margin-bottom: 2.2rem;
    background-color: var(--text);
`