import React from "react"
import * as S from "./styled"

import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"
import { Menu } from "@styled-icons/boxicons-regular/Menu"
import { ListUl as IconBudget } from "@styled-icons/boxicons-regular/ListUl"
import { Grid as Portfolio } from "@styled-icons/bootstrap/Grid"


const Tabbar = () => (
    <S.TabbarWrapper>
        <S.TabbarGroup>
            <S.TabbarLink to="/" title="Abrir Menu">
                <S.TabbarItem><Menu /></S.TabbarItem>
            </S.TabbarLink>

            <S.TabbarLink to="/portfolio/" title="Portfólio">
                <S.TabbarItem><Portfolio /></S.TabbarItem>
            </S.TabbarLink>

            <S.TabbarLink to="/" title="Abrir Menu">
                <S.TabbarItem><IconBudget /></S.TabbarItem>
            </S.TabbarLink>

            <S.TabbarLink href="htpps://www.instagram.com/hercules.design" rel="noopener noreferrer" target="_blank" title="Whatsapp">
                <S.TabbarItem><Whatsapp /></S.TabbarItem>
            </S.TabbarLink>

            <S.TabbarLink href="htpps://www.instagram.com/hercules.design" rel="noopener noreferrer" target="_blank" title="Instagram">
                <S.TabbarItem><Instagram /></S.TabbarItem>
            </S.TabbarLink>
        </S.TabbarGroup>
    </S.TabbarWrapper>
)

export default Tabbar