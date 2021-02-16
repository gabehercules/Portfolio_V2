import React from "react"
import * as S from "./styled"
import RhOn from "../FeaturedProjects/RhOn"
import TorresLayout from "../FeaturedProjects/TorresLayout"
import RoyalAdviceApp from "../FeaturedProjects/RoyalAdviceApp"

import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"

const ProjectsSection = () => (
  
      <S.ProjectsWrapper>
        <S.ProjectsTitle>
            <S.ProjectsHeading>Últimos Projetos</S.ProjectsHeading>
            <S.ProjectsBtnBudget to="/portfolio/" alt="Veja o Portfólio" title="Ver Portfólio" cover direction="left" bg="#141414" duration={0.6}>
                Veja o Portfólio
                <S.BudgetSpan>
                    <GoForm />
                </S.BudgetSpan>
            </S.ProjectsBtnBudget>
        </S.ProjectsTitle>
        <S.ProjectsGrid>
            <S.ProjectsLink to="/portfolio/rhon/" alt="Projeto de Identidade Visual para o aplicativo RhOn" title="RhOn - Identidade Visual" cover direction="left" bg="#141414" duration={0.6}>
                <RhOn />
            </S.ProjectsLink>

            <S.ProjectsLink to="/portfolio/website-design-torres-engenharia-diagnostica/" alt="Design de Interface para o website Torres Engenharia Diagnóstica" title="Torres - Website Design" cover direction="left" bg="#141414" duration={0.6}>
                <TorresLayout />
            </S.ProjectsLink>
                
            <S.ProjectsLink to="/portfolio/royal-advice-web-app-ui-ux-design/" alt="Design de Interface para o website da Royal Advice" title="Royal Advice - Website Design" cover direction="left" bg="#141414" duration={0.6}>
                <RoyalAdviceApp />
            </S.ProjectsLink>
          
        </S.ProjectsGrid>
    </S.ProjectsWrapper>
    )

export default ProjectsSection