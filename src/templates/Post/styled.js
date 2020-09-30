import styled from "styled-components"

export const PostHeader = styled.header`
    color: #efefef;
    margin: auto;
    padding: 2rem 1.6rem;
`

export const PostTitle = styled.h1`
    font-size: 2.2rem;
    font-weight: 700;
    margin: 1rem 0;
`

export const PostDescription = styled.h2`
    font-size: 1.4rem;
    font-weight: 400;
`

export const PostDate = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    color: #bdbdbd;
`

export const MainContent = styled.section`
  padding: 0 1.6rem;
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
    margin: 0 auto 1.6rem;
    font-weight: 300;
    color: #bdbdbd;
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
    color: #efefef;
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
    margin: 0 auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #fff;
    border-left: 0.2rem solid #e20749;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
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
    color: #fff;
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
    border-bottom: 1px dashed #e20749;
    color: #efefef;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #fff;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
