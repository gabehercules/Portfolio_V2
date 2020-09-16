import React from "react"
import { StaticQuery, graphql } from "gatsby"

import SocialLinks from "../SocialLinks"

const Profile = () => (


    <StaticQuery
        query={graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `}

        render={data => (
            <div className="Profile-wrapper">
                <h1>{data.site.siteMetadata.title}</h1>
                <h2>Brand Experience Designer</h2>
                <p>{data.site.siteMetadata.description}</p>
            </div>
        )}
    />


)


export default Profile