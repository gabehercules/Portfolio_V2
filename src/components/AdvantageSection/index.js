import React from "react"
import * as S from "./styled"
import AdvantagesHeading from "../AdvantagesHeading"
import AdvantagesCards from "../AdvantagesCards"

const AdvantageSection = () => (
    <S.AdvantagesWrapper>
        <AdvantagesHeading />
        <AdvantagesCards />
    </S.AdvantagesWrapper>
)

export default AdvantageSection