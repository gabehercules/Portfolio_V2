import React, { useState, useEffect } from "react"

import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Menu } from "@styled-icons/boxicons-regular/Menu"
import { ListUl as IconBudget } from "@styled-icons/boxicons-regular/ListUl"
import { Grid as Portfolio } from "@styled-icons/bootstrap/Grid"
import { Sun } from "@styled-icons/boxicons-regular/Sun"

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
                        <Menu />
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
                        <IconBudget />
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
                        <Sun />
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