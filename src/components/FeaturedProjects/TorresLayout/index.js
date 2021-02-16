import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TorresLayout = () => {
    const { TorresLayout } = useStaticQuery(
       graphql`
        query {
            TorresLayout: file(relativePath: { eq: "torres-thumb2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth:450, maxHeight:450) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
       ` 
    )

    return <Img fluid={TorresLayout.childImageSharp.fluid} title="Website UI Design - Torres" alt="Desenvolvimento de interface para o website Torres Engenharia Diagnóstica" />
}

export default TorresLayout