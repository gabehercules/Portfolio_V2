import React from "react"
import * as S from "./styled"
import WorkHeading from "../WorkHeading"
import WorkCards from "../WorkCards"

const WorkSection = () => (
    <S.WorkWrapper>
        <WorkHeading />
        <WorkCards />
    </S.WorkWrapper>
)

export default WorkSection