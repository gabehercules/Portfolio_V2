import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


import * as S from "./styled"

const PortfolioProjects = () => {
    
    const { portfolioGallery } = useStaticQuery(graphql`
            query {
                portfolioGallery: allFile(filter: {absolutePath: {regex: "/projectThumbs/"}}) {
                  nodes {
                    id
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
              
    `)
    
    
    return(
    <S.PortfolioLinks cover direction="left" bg="#141414" duration={0.6} to="/">
        {portfolioGallery.nodes.map(image => (
                    <Img key={image.id} fluid={image.childImageSharp.fluid} alt="portfolioGallery" />
                ))}
    </S.PortfolioLinks>
    )
}

export default PortfolioProjects