import React from "react"
import * as S from "./styled"
import links from "../Header/content"

const Footer = () => (
    <S.FooterWrapper>

        <S.MenuLinksNav>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink cover direction="left" bg="#141414" duration={0.6} to={link.url} activeClassName="active">{link.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
        </S.MenuLinksNav>
        <S.FooterSocialItems>
        </S.FooterSocialItems>
    </S.FooterWrapper>
)

export default Footer