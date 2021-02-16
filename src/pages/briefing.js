import React from "react"

import Layout from "../components/Layout"
import BriefingHeading from "../components/BriefingHeading"


import SEO from "../components/seo"


const briefingPage = () => (
  <Layout>
    <SEO title="Briefing Online" description="Responda ao briefing nesta página para receber 
    informações sobre prazo e orçamento para o seu projeto!"/>
        <BriefingHeading />

  </Layout>
)

export default briefingPage
