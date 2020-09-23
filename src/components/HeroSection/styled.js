import styled from "styled-components"
import { Link } from "gatsby"

export const HeroSectionWrapper = styled.section`
    background-color: #121212;
    min-height: 70vh;
    padding-bottom: 4rem;
    padding-top: 4rem;
`

export const HeroContainer = styled.div`
    width: 100%;
    padding: 0 1.6rem;
    display: block;
    margin: 0 auto;
`

export const HeroName = styled.h3`
    font-size: 1rem;
    padding-top: 1.2rem;
    margin-bottom: 1.8rem;
    color: #bdbdbd;
    font-weight: 400;
`

export const HeroValor = styled.h1`
    font-size: 3.2rem;
    color: #efefef;
    margin-bottom: 2.6rem;
    font-weight: 600;
`

export const HeroSpan = styled.span`
    color: #e20749;
`

export const HeroDescription = styled.p`
    color: #bdbdbd;
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 2.6rem;
    line-height: 120%;
`
export const HeroCTA = styled(Link)`
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    transition: 300ms ease-out;
    color: #bdbdbd;
    background-color: #181818;
    text-decoration: none;
`

export const BtnSpan = styled.span`
    height: 12px;
    vertical-align: middle;
    margin-left: .9rem;
    color: #e20749;

    svg {
        width: 22px;
    }
`