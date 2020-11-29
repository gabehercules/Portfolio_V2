import React from "react"
import * as S from "./styled"
import SocialLinks from "../SocialLinks"
import links from "../Header/content"

const Footer = () => {
   
    return(
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
        <S.CopyrightWrapper>
            <p>© Gabriel Hercules - Todos os direitos reservados</p>
            <p>Desenvolvido com React e <a href="https://gatsbyjs.com" rel="noopener noreferrer" target="_blank">GatsbyJS</a></p>
        </S.CopyrightWrapper>
        <S.FooterSocialItems>
            <SocialLinks />
        </S.FooterSocialItems>
    </S.FooterWrapper>
    )
}

export default Footer