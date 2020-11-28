import React from "react"
import { graphql } from "gatsby"

import * as S from "./styled"
import SEO from "../../components/seo"
import Layout from "../../components/Layout"
import PortfolioHeading from "../../components/PortfolioHeading"
import ProjectItem from "../../components/ProjectItem"
import Pagination from "../../components/Pagination"



const PortfolioList = props => {

  const portfolioList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? `/portfolio` : `/portfolio/page/${currentPage - 1}`
  const nextPage = `/portfolio/page/${currentPage + 1}`


  return (
    <Layout>
      <SEO title="Portfólio" />
      <PortfolioHeading />
      <S.PortfolioWrapper>
        <S.PortfolioGrid>
          {portfolioList.map(({
            node: {
              frontmatter: {
                category,
                title,
                description,
                thumbnail
              },
              fields: { slug },
            },
          }) => (
              <ProjectItem
                slug={slug}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
              />
            ))}
        </S.PortfolioGrid>
      </S.PortfolioWrapper>
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
    query PortfolioList{
        allMarkdownRemark( filter: { fileAbsolutePath: { regex: "/projects/" }}
            sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                description
                title
                thumbnail
              }
            }
          }
        }
      }
    `

export default PortfolioList