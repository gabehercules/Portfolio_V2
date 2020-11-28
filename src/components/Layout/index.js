import React from "react"
import PropTypes from "prop-types"
import Tabbar from "../Mobile/Tabbar"
import Header from "../Header"
import Footer from "../Footer"

import * as S from "./styled"
import GlobalStyles from "../../styles/global"




const Layout = ({ children }) => {

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Tabbar />
      <Footer />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
