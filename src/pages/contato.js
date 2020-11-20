import React from "react"

import Layout from "../components/Layout"

import SEO from "../components/seo"

import ContactHeading from "../components/ContactHeading"
import ContactInfo from "../components/ContactInfo"
import ContactForm from "../components/ContactForm"

const contactPage = () => (
  <Layout>
    <SEO title="Contato" />
    <ContactHeading />
    <ContactForm />
    <ContactInfo />
  </Layout>
)

export default contactPage
