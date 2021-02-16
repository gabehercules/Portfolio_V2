import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RhOn = () => {
    const { rhonThumb } = useStaticQuery(
       graphql`
        query {
            rhonThumb: file(relativePath: { eq: "rhon-thumb2.jpg" }) {
                childImageSharp {
                    fluid(fit: COVER, maxWidth:450, maxHeight:450) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
       ` 
    )

    return <Img fluid={rhonThumb.childImageSharp.fluid} title="RhOn - Identidade Visual" alt="Projeto de Identidade Visual para o app RhOn" />
}

export default RhOn