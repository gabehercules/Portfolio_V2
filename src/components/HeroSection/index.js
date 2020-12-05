import React from "react"

import { ArrowFromLeft as GoBtn } from "@styled-icons/boxicons-regular/ArrowFromLeft"

import * as S from "./styled"


const HeroSection = () => (

    <S.HeroSectionWrapper>
        <S.HeroContainer>
            <S.HeroValor>Seu produto motiva seus usuários?</S.HeroValor>
            <S.HeroDescription>Sou um designer freelancer apaixonado por fazer com que marcas e produtos se conectem à pessoas, e 
                proporcionem experiências motivadoras.</S.HeroDescription>
            <S.HeroCTA to="/portfolio/" cover direction="left" bg="#141414" duration={0.6} title="Ver Cases">Motive-se
                <S.BtnSpan>
                    <GoBtn />
                </S.BtnSpan>
            </S.HeroCTA>
        </S.HeroContainer>
    </S.HeroSectionWrapper>
)

export default HeroSection