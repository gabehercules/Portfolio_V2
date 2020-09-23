import React from "react"
import * as S from "./styled"
import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"

const ProjectsSection = () => (

    <S.ProjectsWrapper>
        <S.ProjectsTitle>
            <S.ProjectsHeading>Últimos Projetos</S.ProjectsHeading>
            <S.ProjectsBtnBudget href="https://gabrielsyze.typeform.com/to/q1p0JQmv" target="__blank" rel="noreferrer noopener">
                Orçamento
                <S.BudgetSpan>
                    <GoForm />
                </S.BudgetSpan>
            </S.ProjectsBtnBudget>
        </S.ProjectsTitle>

        <S.ProjectsGrid>
            <S.ProjectsLink>
                <S.ProjectsImg />
            </S.ProjectsLink>

            <S.ProjectsLink>
                <S.ProjectsImg />
            </S.ProjectsLink>

            <S.ProjectsLink>
                <S.ProjectsImg />
            </S.ProjectsLink>

            <S.ProjectsLink>
                <S.ProjectsImg />
            </S.ProjectsLink>
        </S.ProjectsGrid>
    </S.ProjectsWrapper>
)

export default ProjectsSection