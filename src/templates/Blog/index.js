import React from "react"

import { graphql } from "gatsby"
import * as S from "./styled"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import PostItem from "../../components/PostItem"
import Pagination from "../../components/Pagination"
import BlogHeading from "../../components/BlogHeading"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <BlogHeading />
      <S.PostItemContainer>

      {postList.map(({
        node: {
          frontmatter: {
            category,
            date,
            title,
            description
          },
          timeToRead,
          fields: { slug },
        },
      }) => (
          <PostItem
            slug={slug}
            thumbnail="Post Teste"
            category={category}
            title={title}
            description={description}
            date={date}
            timeToRead={timeToRead}
          />
        ))}
      </S.PostItemContainer>
      <Pagination 
        isFirst={isFirst} 
        isLast={isLast} 
        currentPage={currentPage} 
        numPages={numPages} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />
    </Layout>
  )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/posts/" }}
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
                description
                title
              }
              timeToRead
            }
          }
        }
      }
    `

export default BlogList