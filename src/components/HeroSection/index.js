import React from "react"
import * as S from "./styled"


const HeroSection = () => (

    <S.HeroSectionWrapper>
        <S.HeroContainer>
            <S.HeroName>Hey! Meu nome é Gabriel Hercules e</S.HeroName>
            <S.HeroValor>Desenvolvo <S.HeroSpan>marcas que motivam</S.HeroSpan>.</S.HeroValor>
            <S.HeroDescription>Sou um designer freelancer apaixonado por fazer marcas se conectarem à pessoas, e proporcionar experiências motivadoras.</S.HeroDescription>
        </S.HeroContainer>
    </S.HeroSectionWrapper>
)

export default HeroSection