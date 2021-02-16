import React from "react"
import * as S from "./styled"

const BriefingHeading = () => (
    <S.BriefingWrapper>
        <S.HeadingContent>
            <S.ContentTitle>Briefing</S.ContentTitle>
                <S.ContentParagraph>
                    Opa! Que bom que parou por aqui.
                </S.ContentParagraph>
                <S.ContentParagraph>
                    Este briefing irá te guiar sobre os principais questionamentos para o 
                    desenvolvimento do seu projeto, seja ele um <span>logotipo</span>, uma <span>identidade 
                    visual</span> ou um <span>layout de app, sistema ou site</span> (UI/UX).
                </S.ContentParagraph>
                <S.ContentParagraph>
                    As questões são de extrema importância, e vão me guiar no desenvolvimento 
                    para que seu projeto exceda as suas expectativas.
                </S.ContentParagraph>
                <S.ContentAdvice>
                    <h4>Importante</h4>
                    <p>Os dados compartilhados por você neste formlário não serão usados para nehum fim que não seja os propostos nesta descrição.</p>
                </S.ContentAdvice>
        </S.HeadingContent>
        <S.AvisoWrapper>
            <h2>O formulário do briefing está quase pronto 😉</h2>
            <p>Caso tenha interesse em conversar sobre um projeto, chame no <a href="https://api.whatsapp.com/send?1=pt_BR&phone=55011944801999"
            rel="nofollow noreferrer" target="_blank">whatsapp (11)94480-1999</a> ou no email <a href="mailto:eu@gabehercules.me">eu@gabehercules.me
            </a>.</p>
        </S.AvisoWrapper>
    </S.BriefingWrapper>
)

export default BriefingHeading
