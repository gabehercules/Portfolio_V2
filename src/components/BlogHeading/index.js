import React from "react"
import * as S from "./styled"

const BlogHeading = () => (
    <S.SectionWrapper>
        <S.HeadingContent>
            <S.ContentTitle>Blog</S.ContentTitle>
            <S.ContentParagraph>Confira aqui, meus últimos posts sobre o mundo do design e da tecnologia, minhas experiências, aprendizados
                e muito mais. Alguns destes artigos também pode ser encontrados no meu perfil do <S.ContentLink
            href="https://www.linkedin.com/in/gabrielhercules"
            target="__blank"
            rel="noreferrer noopener">
            Linkedin
            </S.ContentLink> e também no <S.ContentLink
            href="https://www.medium.com/@gabrielsyze"
            target="__blank"
            rel="noreferrer noopener">
            Medium
            </S.ContentLink>.
            </S.ContentParagraph>
        </S.HeadingContent>
    </S.SectionWrapper>
)

export default BlogHeading