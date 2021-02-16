import styled from "styled-components"
import media from "styled-media-query"


export const ProjectHeaderWrapper = styled.div`
  background-color: var(--lightBackground);
  border-bottom: 1px solid #070707;
`

export const ProjectHeader = styled.header`
    color: var(--title);
    margin: auto;
    padding: 2rem 1.6rem;
    max-width: 60rem;
`

export const ProjectTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem 0;
    line-height: 150%;

    ${media.greaterThan("768px")`
    font-size: 3rem;

    `}

    ${media.greaterThan("991px")`
    font-size: 4.2rem;

    `}
`

export const ProjectDescription = styled.h2`
    font-size: 1.2rem;
    line-height: 150%;
    font-weight: 400;

    ${media.greaterThan("768px")`
    font-size: 2.2rem;

    `}

    ${media.greaterThan("991px")`
    font-size: 2.2rem;

    `}
`

export const ProjectDate = styled.p`
    font-size: .9rem;
    font-weight: 300;
    color: var(--text);
`

export const MainContent = styled.section`
  padding: 4rem 1.6rem;
  margin: auto;
  max-width: 60rem;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }
  p {
    margin: 0 auto 30px;
    font-weight: 300;
    color: var(--text);
  }
  span.gatsby-resp-image-wrapper {
    margin-bottom: -30px !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    color: var(--title);
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    border-radius: 3px;
    margin: 0 auto !important;

  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--text);
    border-left: 0.2rem solid var(--contrast);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--contrast);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    letter-spacing: 0.069rem;
    line-height: 120%;
    color: var(--title);
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.2rem;
  }
  h5 {
    font-size: 1rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 1.6rem 0;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  .skills-list {
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
    }
  }
  a {
    border-bottom: 1px dashed var(--contrast);
    color: var(--title);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--text);
    }
    &:hover {
      opacity: 0.8;
    }
  }
  
`
