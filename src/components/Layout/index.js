import React from "react"
import PropTypes from "prop-types"
import Tabbar from "../Mobile/Tabbar"
import Header from "../Header"

import GlobalStyles from "../../styles/global"




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
