import React from "react"





import { PenNib as Portfolio } from "@styled-icons/remix-line/PenNib"

import { Home6 as Home } from "@styled-icons/remix-line/Home6"

import { Draft as Blog } from "@styled-icons/remix-line/Draft"

import { Whatsapp } from "@styled-icons/remix-line/Whatsapp"

import { Instagram } from "@styled-icons/remix-line/Instagram"





import * as S from "./styled"


const Tabbar = () => {

    return (
        <S.TabbarWrapper>
            <S.TabbarGroup>
                <S.TabbarLink to="/" cover direction="left" bg="#141414" duration={0.6} title="Voltar para o Início">
                    <S.TabbarItem>
                        <Home />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Início
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink to="/portfolio/" cover direction="left" bg="#141414" duration={0.6} title="Portfólio">
                    <S.TabbarItem>
                        <Portfolio />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Portfólio
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink to="/contato" cover direction="left" bg="#141414" duration={0.6} title="Abrir Menu">
                    <S.TabbarItem>
                        <Blog />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Contato
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink href="https://api.whatsapp.com/send?1=pt_BR&phone=55011944801999" rel="noopener noreferrer" target="_blank" title="Whatsapp">
                    <S.TabbarItem>
                        <Whatsapp />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Whatsapp
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink cover href="https://www.instagram.com/hercules.design" direction="left" bg="#141414" duration={0.6} rel="noopener noreferrer" target="_blank" title="Instagram">
                    <S.TabbarItem>
                        <Instagram />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Instagram
                </S.TabbarName>
                </S.TabbarLink>
            </S.TabbarGroup>
        </S.TabbarWrapper>
    )
}


export default Tabbar