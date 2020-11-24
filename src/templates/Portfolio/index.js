import React from "react"
import * as S from "./styled"
import { graphql } from "gatsby"


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
    <>
      {portfolioList.map(({
        node: {
          frontmatter: {
            category,
            title,
            description
          },
          fields: { slug },
        },
      }) => (
          <ProjectItem
            slug={slug}
            thumbnail="Post Teste"
            category={category}
            title={title}
            description={description}
          />
        ))}
        </>
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
              }
              timeToRead
            }
          }
        }
      }
    `

export default PortfolioList