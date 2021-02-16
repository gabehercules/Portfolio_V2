import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const ServicesWrapper = styled.div`
    padding: 0 8.6rem;
    margin-bottom: 50px;

    ${media.lessThan("768px")`
        padding: 0 1.6rem;
    `}
`

export const ServicesHeading = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    h2{
        font-size: 2.2rem;
        color: var(--title);
        font-weight: 600;

        ${media.lessThan("991px")`
            margin-bottom: 50px;
        `}
    }

    ${media.lessThan("991px")`
        display: block;
    `}
`

export const ServicesBriefing = styled(AniLink)`
    padding: 10px 20px;
    background-color: var(--contrast);
    border-radius: 5px;
    display: inline-block;
    transition: 300ms ease-out;
    color: var(--title);
    text-decoration: none;

    span{
        height: 12px;
        vertical-align: middle;
        margin-left: .9rem;
        color: var(--background);

        svg {
            width: 22px;
        }
    }
`

export const ServicesItems = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;

    ${media.lessThan("991px")`
        display: block;
    `}
`

export const ItemService = styled.div`
padding: 20px;
border-radius: 6px;
border: 1px solid #070707;

${media.lessThan("991px")`
        margin-bottom: 40px;
    `}

h3{
    color: var(--title);
    margin-bottom: .6rem;
    font-weight: 600;
    font-size: 1.2rem;
}

p{
    font-size: .9rem;
    color: var(--text);
    line-height: 150%;
    font-weight: 400;
}

`