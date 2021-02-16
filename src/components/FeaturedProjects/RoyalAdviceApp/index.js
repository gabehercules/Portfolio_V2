import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const RhOn = () => {
    const { rhonThumb } = useStaticQuery(
       graphql`
        query {
            rhonThumb: file(relativePath: { eq: "royaladvice-thumb2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth:450, maxHeight:450) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
       ` 
    )

    return <Img fluid={rhonThumb.childImageSharp.fluid} title="Painel Royal Advice - UI/UX" alt="Projeto redesign de interface e melhorias de experiência de usuário para o sistema web da Royal Advice" />
}

export default RhOn