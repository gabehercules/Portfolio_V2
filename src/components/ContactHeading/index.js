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
        </S.HeadingContent>
    </S.SectionWrapper>
)

export default ContactHeading