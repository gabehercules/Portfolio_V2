import styled from "styled-components"


export const WorkCardsWrapper = styled.div`
    padding: 1.6rem;
`

export const CardsItem = styled.div`
    border-radius: 5px;
    margin-bottom: 2rem;
`

export const CardsItemHead = styled.div`
    padding: 1.86rem 1.12rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #181818;

    h3 {
        color: #efefef;
        margin-bottom: .4rem;
        font-weight: 600;
        font-size: 1.2rem;
    }

    h4 {
        color: #bdbdbd;
    }
`

export const CardsItemBody = styled.div`
    min-height: 200px;
    padding: 1.86rem 1.12rem;
    background-color: #121212;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    p {
        font-size: .9rem;
        color: #bdbdbd;
        line-height: 150%;
        font-weight: 400;
    }
`