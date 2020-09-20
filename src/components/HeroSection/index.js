import React from "react"
import Logo from "../Logo"

import { ArrowFromLeft as GoBtn } from "@styled-icons/boxicons-regular/ArrowFromLeft"

import * as S from "./styled"


const HeroSection = () => (

    <S.HeroSectionWrapper>
        <S.HeroContainer>
            <Logo />
            <S.HeroName>Hey! Meu nome é Gabriel Hercules e</S.HeroName>
            <S.HeroValor>Desenvolvo <S.HeroSpan>marcas que motivam</S.HeroSpan>.</S.HeroValor>
            <S.HeroDescription>Sou um designer freelancer apaixonado por fazer marcas se conectarem à pessoas, e proporcionar experiências motivadoras.</S.HeroDescription>
            <S.HeroCTA to="/portfolio/" title="Ver Projetos">Motive-se
                <S.BtnSpan>
                    <GoBtn />
                </S.BtnSpan>
            </S.HeroCTA>
        </S.HeroContainer>
    </S.HeroSectionWrapper>
)

export default HeroSection