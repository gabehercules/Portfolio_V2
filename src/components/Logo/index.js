import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = () => {
    const { logoHeader } = useStaticQuery(
       graphql`
        query {
            logoHeader: file(relativePath: { eq: "favicon.png" }) {
                childImageSharp {
                    fixed(width:40, height:40) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
       ` 
    )

    return <Img fixed={logoHeader.childImageSharp.fixed} title="Gabriel Hercules" alt="Gabe Hercules Logo" />
}

export default Logo