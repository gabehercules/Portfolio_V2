import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecomendedWrapper = styled.div`
    background-color: var(--background);
    display: flex;
    border-top: 1px solid var(--text);
    border-bottom: 1px solid var(--text);
`

export const RecommendedLink = styled(AniLink)`
    display: flex;
    background-color: var(--background);
    align-items: center;
    color: var(--text);
    padding: 1.6rem;
    text-decoration: none;
    transition: 500ms;
    width: 50%;
    font-weight: 300;
    line-height: 120%;
    font-size: .920rem;

    &:hover {
        background-color: var(--lightBackground);
    }

    &.previous {
        border-right: 1px solid var(--text);
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

