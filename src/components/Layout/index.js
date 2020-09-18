import React from "react"
import PropTypes from "prop-types"
import Tabbar from "../Mobile/Tabbar"
import MobileHeader from "../Mobile/MobileHeader"

import GlobalStyles from "../../styles/global"




const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <MobileHeader />
      <main>{children}</main>
      <Tabbar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
