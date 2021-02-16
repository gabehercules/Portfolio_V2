import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecomendedWrapper = styled.div`
    background-color: var(--background);
    display: flex;
    justify-content: space-between;
    padding: 0 8.6rem 50px 8.6rem;
    border-bottom: 1px solid #070707;
`

export const RecommendedLink = styled(AniLink)`
    display: flex;
    background-color: var(--background);
    align-items: center;
    color: var(--text);
    border: 1px solid #070707;
    padding: 1.6rem;
    border-radius: 6px;
    text-decoration: none;
    transition: 500ms;
    width: 40%;
    font-weight: 300;
    line-height: 120%;
    font-size: .920rem;

    &:hover {
        background-color: var(--lightBackground);
        border-color: var(--contrast);
    }

    &.next {
        justify-content: flex-end;
    }

    &.next:only-child {
    margin-left: auto;
    border-left: 1px solid var(--borders);
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`

