import React from "react"
import * as S from "./styled"
import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"


const OnlineBriefing = () => (
    <S.BriefingWrapper>
        <S.Briefingtitle>
            <h2>Briefing Online</h2>
        </S.Briefingtitle>
        <S.BriefingContent>
            <p>
                Caso queira encurtar o uma parte do processo inicial, reponda o 
                briefing online <span>(sem nenhum compromisso de acordo)</span>, assim poderei 
                ter uma maior noção sobre seu projeto e suas necessidades. Após 
                responder, entrarei em contato para informações sobre orçamento.
            </p>
        </S.BriefingContent>
        <S.BriefingLink title="Briefing Online" alt="Clique para acessar o Briefing Online" to="/briefing/" cover direction="left" bg="#141414" duration={0.6}>
            Acessar Briefing
            <span>
                <GoForm />
            </span>
        </S.BriefingLink>
    </S.BriefingWrapper>
)

export default OnlineBriefing