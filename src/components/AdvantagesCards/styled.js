import styled from "styled-components"
import media from "styled-media-query"


export const AdvantageCardsWrapper = styled.div`
    padding: 50px 1.6rem;

    ${media.greaterThan("medium")`
        padding: 50px 5.6rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:;
        grid-gap: 20px;
    `}

    ${media.greaterThan("large")`
        grid-gap: 30px;
    `}
`

export const AdvantageCardsItem = styled.div`
    padding: 1.86rem 1.12rem;
    border-radius: 5px;
    background-color: var(--lightBackground);
    margin-bottom: 2.6rem;

    ${media.greaterThan("medium")`
        margin-bottom: 0;
        background-color: var(--lightBackground);
    `}

    h3 {
        color: var(--title);
        margin-bottom: 1.8rem;
        font-weight: 600;
        font-size: 1.1rem;
    }

    p {
        font-size: .9rem;
        color: var(--text);
        line-height: 150%;
        font-weight: 400;
    }
`