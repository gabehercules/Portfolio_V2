import styled from "styled-components"
import media from "styled-media-query"

export const HomeContact_Warpper = styled.div`
margin-top: 50px;
padding: 0 8.6rem;
border-top: 1px solid #070707;
border-bottom: 1px solid #070707;

${media.lessThan("991px")`
    padding: 0 1.6rem;
    `}

`

export const ContactLeft = styled.div`
    width: 50%;

    ${media.lessThan("991px")`
        width: 100%;
    `}
`

export const HomeContact_Heading = styled.div`
    margin: 50px 0;
    h2{
        font-size: 2.2rem;
        color: var(--title);
        font-weight: 600;
    }

    p{
        font-size: .9rem;
        color: var(--text);
        line-height: 150%;
        font-weight: 400;
        margin-top: 50px;
        max-width: 600px;

        a{
            color: var(--contrast);
            text-decoration: none;
        }
    }

`

export const HomeContact_Form = styled.div`
    margin-bottom: 50px;

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
`

export const FormDisclaimer = styled.p`
    color: var(--text);
    font-size: .9rem;
    margin-top: 20px;
    line-height: 150%;

`

export const ContactRight = styled.div`

`