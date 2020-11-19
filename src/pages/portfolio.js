import React from "react"

import Layout from "../components/Layout"
import PortfolioHeading from "../components/PortfolioHeading"
import PortfolioSection from "../components/PortfolioSection"

import SEO from "../components/seo"

const PortfolioPage = () => {

    

    return (
        <Layout>
            <SEO title="Portfólio" />
            <PortfolioHeading />
            <PortfolioSection />
        </Layout>
    )
}

export default PortfolioPage