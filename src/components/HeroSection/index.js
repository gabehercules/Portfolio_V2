import React from "react"

import { ArrowFromLeft as GoBtn } from "@styled-icons/boxicons-regular/ArrowFromLeft"

import * as S from "./styled"


const HeroSection = () => (

    <S.HeroSectionWrapper>
        <S.HeroContainer>
            <S.HeroName>Hey! Meu nome é Gabriel Hercules e</S.HeroName>
            <S.HeroValor>Desenvolvo <S.HeroSpan>marcas e experiências que motivam</S.HeroSpan>.</S.HeroValor>
            <S.HeroDescription>Sou um designer freelancer apaixonado por fazer com que marcas e produtos se conectem à pessoas, e 
                proporcionem experiências motivadoras.</S.HeroDescription>
            <S.HeroCTA to="/portfolio/" cover direction="left" bg="#141414" duration={0.6} title="Ver Projetos">Motive-se
                <S.BtnSpan>
                    <GoBtn />
                </S.BtnSpan>
            </S.HeroCTA>
        </S.HeroContainer>
    </S.HeroSectionWrapper>
)

export default HeroSection