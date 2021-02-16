import styled from "styled-components"
import media from "styled-media-query"

export const FormWrapper = styled.div`
    padding: 4rem 1.6rem;

${media.greaterThan("768px")`
    padding: 4rem 8.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`}
`

export const ContactTitle = styled.h2`
    font-size: 2.2rem;
    color: var(--title);
    font-weight: 600;
    margin-bottom: 1.2rem;
    text-align: center;

    
`

export const ContactSubtitle = styled.p`
    color: var(--text);
    line-height: 120%;
    text-align: center;
    font-size: .9rem;
    margin-bottom: 2rem;

    &::after {
        content: '';
        display: block;
        height: 1px;
        width: 100%;
        background-color: #070707;
        margin-top: 2rem;
    }
`

export const FormBlock = styled.div`
    margin-top: 3rem;
    width: 100%;
    background-color: var(--lightBackground);
    padding: 2rem;
    border-radius: 10px;
    border: 1px solid #070707;
    
    ${media.greaterThan("medium")`
        width: 80%;
    `}

    ${media.greaterThan("991px")`
        width: 60%;
    `}

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }

    label{
        color: var(--text);
        font-size: .8rem;
        margin-bottom: .6rem;
    }

    input{
        height: 42px;
        border: 1px solid #070707;
        border-radius: 6px;
        outline: none;
        background-color: var(--darkerBackground);
        color: var(--title);
        padding: 10px 15px;
        box-shadow: none;
        font-family: 'Poppins', sans-serif;
    }

    textarea{
        height: 126px;
        resize: vertical;
        padding: 10px 15px;
        border: 1px solid #070707;
        border-radius: 10px;
        outline: none;
        color: var(--title);
        font-family: 'Poppins', sans-serif;
        background-color: var(--darkerBackground);
    }

    button{
        padding: 10px 20px;
        background-color: var(--contrast);
        border-radius: 5px;
        display: inline-block;
        transition: 300ms ease-out;
        color: var(--title);
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        outline: none;
        border: none;
        font-size: 1rem;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active  {
        box-shadow: 0 0 0 100px var(--darkerBackground) inset !important;
        border: none !important;
}

    input:-webkit-autofill {
        -webkit-text-fill-color: var(--title) !important;
}
`
