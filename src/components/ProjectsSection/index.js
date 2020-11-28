import React from "react"
import * as S from "./styled"
import { graphql } from "gatsby"

import ProjectItem from "../ProjectItem"

import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"

const ProjectsSection = () => (



    <S.ProjectsWrapper>
        <S.ProjectsTitle>
            <S.ProjectsHeading>Últimos Projetos</S.ProjectsHeading>
            <S.ProjectsBtnBudget href="https://gabrielsyze.typeform.com/to/q1p0JQmv" target="__blank" rel="noreferrer noopener">
                Orçamento
                <S.BudgetSpan>
                    <GoForm />
                </S.BudgetSpan>
            </S.ProjectsBtnBudget>
        </S.ProjectsTitle>

        <S.ProjectsGrid>
            <ProjectItem />
        </S.ProjectsGrid>
    </S.ProjectsWrapper>
)


export const query = graphql`
  query PortfolioFeatured {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
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
        }
      }
    }
  }
    `


export default ProjectsSection