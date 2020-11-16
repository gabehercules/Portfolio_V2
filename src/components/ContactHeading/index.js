import React from "react"
import * as S from "./styled"

const ContactHeading = () => (
    <S.SectionWrapper>
        <S.HeadingContent>
            <S.ContentTitle>Contato</S.ContentTitle>
            <S.ContentParagraph>Legal que você gostou do meu trabalho. Caso tenha interesse 
                em conversar sobre um projeto, saber valores, ou de alguma forma que eu 
                possa ajudá-lo, mande um email para <S.ContentLink
            href="mailto:hey@gabehercules.me"
            target="__blank"
            rel="noreferrer noopener">
            hey@gabehercules.me
            </S.ContentLink>.
            </S.ContentParagraph>
            <S.ContentParagraph>
            Ou fique a vontade para me chamar no <S.ContentLink 
            href="https://api.whatsapp.com/send?1=pt_BR&phone=55011944801999"
            rel="noreferrer noopener"
            target="__blank">whatsapp (11) 94480-1999</S.ContentLink>.
            </S.ContentParagraph>
            <S.ContentParagraph>
            Tirarei todas as suas dúvidas e deixarei você a par de todos os benefícios 
            que uma marca bem estruturada em diversos canais digitais podem trazer para seu negócio.
            </S.ContentParagraph>
        </S.HeadingContent>
    </S.SectionWrapper>
)

export default ContactHeading