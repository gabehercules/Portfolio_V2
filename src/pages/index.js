import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import ProjectsSection from "../components/ProjectsSection"



const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
      <HeroSection />
      <ProjectsSection />


  </Layout>
)

export default IndexPage
