import React from "react"

import links from "./content"
import Logo from "../Logo"

import * as S from "./styled"



const Header = () => (

    <S.MenuLinksWrapper>
        <Logo />
        <S.MenuLinksList>
            {links.map((link, i) => (
                <S.MenuLinksItem key={i}>
                    <S.MenuLinksLink to={link.url} activeClassName="active">{link.label}</S.MenuLinksLink>
                </S.MenuLinksItem>
            ))}
        </S.MenuLinksList>
    </S.MenuLinksWrapper>
)

export default Header