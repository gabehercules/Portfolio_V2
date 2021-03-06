import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"

import ContactHeading from "../components/ContactHeading"
import ContactForm from "../components/ContactForm"

const contactPage = () => (
  <Layout>
    <SEO title="Contato" description="Entre em contato preenchendo o formulário ou pelo whatsapp (11)94480-1999"/>
    <ContactHeading />
    <ContactForm />
  </Layout>
)

export default contactPage
