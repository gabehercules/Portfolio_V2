import React, { useState, useEffect } from "react"





import { PenNib as Portfolio } from "@styled-icons/remix-line/PenNib"

import { Home6 as Home } from "@styled-icons/remix-line/Home6"

import { Draft as Blog } from "@styled-icons/remix-line/Draft"

import { Whatsapp } from "@styled-icons/remix-line/Whatsapp"

import { Instagram } from "@styled-icons/remix-line/Instagram"





import * as S from "./styled"


const Tabbar = () => {
    const [theme, setTheme] = useState(null)

    const  isDarkMode = theme === 'dark'

    useEffect(() => {
        setTheme(window.__theme)
        window.__onThemeChange = () => setTheme(window.__theme)
    }, [])

    return (
        <S.TabbarWrapper>
            <S.TabbarGroup>
                <S.TabbarLink to="/" title="Voltar para o Início">
                    <S.TabbarItem>
                        <Home />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Início
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink to="/portfolio/" title="Portfólio">
                    <S.TabbarItem>
                        <Portfolio />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Portfólio
                </S.TabbarName>
                </S.TabbarLink>

                <S.TabbarLink to="/blog" title="Abrir Menu">
                    <S.TabbarItem>
                        <Blog />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Orçamento
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

                <S.TabbarLink>
                    <S.TabbarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                }}>
                        <Instagram />
                    </S.TabbarItem>
                    <S.TabbarName>
                        Mudar Tema
                </S.TabbarName>
                </S.TabbarLink>
            </S.TabbarGroup>
        </S.TabbarWrapper>
    )
}


export default Tabbar