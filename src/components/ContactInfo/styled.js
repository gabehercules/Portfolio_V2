import styled from "styled-components"
import media from "styled-media-query"


export const ContactWrapper = styled.div`
    padding: 4rem 1.6rem;

    ${media.greaterThan("768px")`
        padding: 4rem 5.6rem;
    `}

`

export const FaqContainer = styled.div`

`

export const FaqTitle = styled.h2`
    font-size: 2.2rem;
    color: var(--title);
    font-weight: 600;
`

export const FaqItem = styled.div`
    margin-top: 2rem;
    background-color: var(--lightBackground);
    padding: 1.86rem 1.12rem;
    border-radius: 10px;
`

export const FaqQuestion = styled.div`

    h4 {
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 120%;
        color: var(--title);
        margin-bottom: 1.8rem;
    }

    h4::before {
        content: '';
        height: 7px;
        width: 7px;
        border-radius: 4px;
        background-color: var(--contrast);
        display: inline-block;
        vertical-align: middle;
        margin-right: 7px;
    }
`

export const FaqAnswer = styled.div`
    
    p {
        color: var(--text);
        line-height: 120%;
        font-size: .9rem;
    }
`