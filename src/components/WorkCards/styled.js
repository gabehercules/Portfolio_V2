import styled from "styled-components"
import media from "styled-media-query"

export const WorkCardsWrapper = styled.div`
    padding: 50px 1.6rem;

    ${media.greaterThan("medium")`
        padding: 50px 8.6rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:;
        grid-gap: 20px;
    `}

    ${media.greaterThan("large")`
        grid-gap: 30px;
        grid-template-columns: repeat(4, 1fr);
    `}
`

export const CardsItem = styled.div`
    border-radius: 5px;
    margin-bottom: 2rem;
    border: 1px solid #070707;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
        background-color: var(--lightBackground);
    `}
`

export const CardsItemHead = styled.div`
    padding: 1.86rem 1.12rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: var(--darkerBackground);

    h3 {
        color: var(--title);
        margin-bottom: .4rem;
        font-weight: 600;
        font-size: 1.2rem;
    }

    h4 {
        color: var(--text);
    }
`

export const CardsItemBody = styled.div`
    min-height: 200px;
    padding: 1.86rem 1.12rem;
    background-color: var(--lightBackground);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    p {
        font-size: .9rem;
        color: var(--text);
        line-height: 150%;
        font-weight: 400;
    }
`