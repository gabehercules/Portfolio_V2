import React from "react"
import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"


import links from "./content"

import * as S from "./styled"



const Header = () => (
    <S.HeaderWrapper>
        <S.HeaderLogo>
            <S.HeaderName>
                <h5>Gabriel Hercules</h5>
            </S.HeaderName>
        </S.HeaderLogo>
        <S.MenuLinksNav>
            <S.MenuLinksList>
                {links.map((link, i) => (
                    <S.MenuLinksItem key={i}>
                        <S.MenuLinksLink cover direction="left" bg="#141414" duration={0.6} to={link.url} activeClassName="active">{link.label}</S.MenuLinksLink>
                    </S.MenuLinksItem>
                ))}
            </S.MenuLinksList>
            <S.BriefingButton title="Briefing Online" alt="Clique para acessar o Briefing Online" to="/briefing/" cover direction="left" bg="#141414" duration={0.6}>
                    Briefing
                    <span>
                        <GoForm />
                    </span>
                </S.BriefingButton>
        </S.MenuLinksNav>
    </S.HeaderWrapper>
)

export default Header