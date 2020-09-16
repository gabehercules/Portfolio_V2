import React from "react"
import PropTypes from "prop-types"
import Tabbar from "../Tabbar"

import GlobalStyles from "../../styles/global"

import Header from "../Header"




const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Tabbar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
