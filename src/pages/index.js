import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import ProjectsSection from "../components/ProjectsSection"
import WorkSection from "../components/WorkSection"
import Testimonials from "../components/Testimonials"
import ServicesUIUX from "../components/ServicesUIUX"
import OnlineBriefing from "../components/OnlineBriefing"
import ContactHome from "../components/ContactHome"


const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
      <HeroSection />
      <ProjectsSection />
      <ServicesUIUX />
      <WorkSection />
      <OnlineBriefing />
      <Testimonials />
      <ContactHome />
  </Layout>
)

export default IndexPage
