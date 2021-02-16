import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const TestimonialWrapper = styled.div`
    padding: 0 8.6rem;

    ${media.lessThan("768px")`
        padding: 0 1.6rem;
    `}

`

export const TestimonialTitle = styled.div`
    margin-bottom: 50px;
    h2{
    font-size: 2.2rem;
    color: var(--title);
    font-weight: 600;
    }

`
export const TestimonialCards = styled.div`
    column-count: 2;
    column-gap: 40px;  

    ${media.lessThan("991px")`
        column-count: initial;
    `}  
`

export const TCardItem = styled.div`
    padding: 30px;
    margin-bottom: 40px;
    border: 1px solid #070707;
    max-width: 560px;
    border-radius: 6px;
    background-color: var(--lightBackground);

    ${media.lessThan("991px")`
        max-width: 100%;
    `}
    
`

export const TCardHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    ${media.lessThan("1170px")`
        flex-direction: column;
    `}
`

export const TCardBody = styled.div`
p{
    color: var(--text);
    line-height: 150%;
}

`

export const THeadingInfo = styled.div`

    display: flex;
    align-items: center;

    ${media.lessThan("1170px")`
        margin-bottom: 10px;
    `}

    h3{
        color: var(--title);
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 10px;

        span{
            color: var(--text);
            font-size: .9rem;
            font-weight: 400;
            display: block;
            margin-top: 5px;
        }
    }
`

export const NameInitials = styled.div`
    height: 50px;
    width: 50px;
    background-color: var(--contrast);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        font-size: 1.1rem;
        color: var(--title);
        font-weight: 400;
        text-align: center;
    }

`

export const TButton = styled(AniLink)`
    text-decoration: underline var(--contrast);
    color: var(--text);
    font-size: .9rem;

    span{
        height: 12px;
    vertical-align: middle;
    margin-left: 10px;
    color: var(--contrast);

    svg {
        width: 22px;
    }
    }
`