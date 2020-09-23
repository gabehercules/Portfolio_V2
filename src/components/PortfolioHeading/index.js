import React from "react"
import * as S from "./styled"

const PortfolioHeading = () => (
    <S.SectionWrapper>
        <S.HeadingContent>
            <S.ContentTitle>Portfólio</S.ContentTitle>
            <S.ContentParagraph>Confira os últimos projetos que desenvolvi.</S.ContentParagraph>
            <S.ContentParagraph>Você também pode acompanhar meu Instagram <S.ContentLink
            href="https://www.instagram.com/hercules.design"
            target="__blank"
            rel="noreferrer noopener">
            @hercules.design
            </S.ContentLink> se quiser seguir meu trabalho mais de perto e acompanhar
                meu dia-a-dia profissional.
            </S.ContentParagraph>
        </S.HeadingContent>
    </S.SectionWrapper>
)

export default PortfolioHeading