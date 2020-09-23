import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import ProjectsSection from "../components/ProjectsSection"
import WorkSection from "../components/WorkSection"
import AdvantageSection from "../components/AdvantageSection"


const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
      <HeroSection />
      <ProjectsSection />
      <WorkSection />
      <AdvantageSection />
  </Layout>
)

export default IndexPage
