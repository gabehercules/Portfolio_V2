import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const BriefingWrapper = styled.div`
    padding: 0 8.6rem;
    margin-bottom: 50px;

    ${media.lessThan("768px")`
        padding: 0 1.6rem;
    `}
`

export const Briefingtitle = styled.div`
    
    margin-bottom: 50px;

    h2{
        font-size: 2.2rem;
        color: var(--title);
        font-weight: 600;
    }
`

export const BriefingContent = styled.div`
    p{
    font-size: .9rem;
    color: var(--text);
    line-height: 150%;
    font-weight: 400;
    margin-bottom: 50px;
    max-width: 600px;

    span{
        font-weight: 700;
    }
}
`

export const BriefingLink = styled(AniLink)`
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