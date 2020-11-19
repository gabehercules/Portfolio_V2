import React from "react"

import PortfolioProjects from "../PortfolioProjects"

import * as S from "./styled"



const PortfolioSection = () => (
    <S.PortfolioWrapper>
        <S.PortfolioGrid>

            {/* --map dos itens  aqui */}
            <PortfolioProjects />


        </S.PortfolioGrid>
    </S.PortfolioWrapper>
)

export default PortfolioSection