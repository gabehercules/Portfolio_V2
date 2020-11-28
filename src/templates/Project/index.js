import React from "react"
import { graphql } from "gatsby"

import * as S from "./styled"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import RecommendedPosts from "../../components/RecommendedPosts"

const PortfolioProject = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.ProjectHeaderWrapper>
        <S.ProjectHeader>
          <S.ProjectTitle>{post.frontmatter.title}</S.ProjectTitle>
          <S.ProjectDescription>{post.frontmatter.description}</S.ProjectDescription>
        </S.ProjectHeader>
      </S.ProjectHeaderWrapper>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
    </Layout>
  )
}

export const query = graphql`
    query Project($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            description
            thumbnail
          }
          html
        }
      }
    `

export default PortfolioProject