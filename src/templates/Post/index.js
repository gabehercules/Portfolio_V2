import React from "react"
import { graphql } from "gatsby"

import * as S from "./styled"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"

const BlogPost = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
          <SEO title={post.frontmatter.title} />
          <S.PostHeader>
            <S.PostDate>{post.frontmatter.date} - {post.timeToRead} min de leitura</S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
              <div dangerouslySetInnerHTML={{__html: post.html }}></div>
          </S.MainContent>
        </Layout>
    )
}

    export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [/] MM [/] YYYY")
            title
            description
          }
          html
          timeToRead
        }
      }
    `

export default BlogPost