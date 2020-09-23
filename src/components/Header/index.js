import React from "react"

import Logo from "../Logo"
import links from "./content"

import * as S from "./styled"



const Header = () => (

    <S.HeaderWrapper>
        <S.HeaderLogo>
            <Logo />
            <S.HeaderName>
                <h4>Gabriel Hercules</h4>
            </S.HeaderName>
        </S.HeaderLogo>
        <S.MenuLinksNav>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink to={link.url} activeClassName="active">{link.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksNav>
    </S.HeaderWrapper>
)

export default Header