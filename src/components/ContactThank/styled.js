import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export const ThankWrapper = styled.div`
    padding: 4rem 1.6rem;

    ${media.greaterThan("768px")`
        padding: 4rem 8.6rem;
    `}
`

export const ThankMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        margin-top: 2rem;
        font-size: 4.4rem;
        color: var(--title);
        margin-bottom: 1.6rem;
        font-weight: 600;
    }

    span{
        display: block;
        margin-bottom: 2rem;
        font-size: 2rem;
        font-weight: 400;
        color: var(--text);
    }

`

export const BackContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`

export const BackLink = styled(AniLink)`
    padding: 30px 60px;
    background-color: var(--contrast);
    border-radius: 5px;
    color: var(--title);
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
`