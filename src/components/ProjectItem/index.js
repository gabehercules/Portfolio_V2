import React from "react"
import PropTypes from "prop-types"


import * as S from "./styled"

const ProjectItem = ({ slug, category, title, description }) => (

    <S.ProjectItemLink cover direction="left" bg="#141414" duration={0.6} to={slug}>
        <S.ProjectItemWrapper>
            <S.ProjectItemContent>
                <S.ProjectItemTag>{category}</S.ProjectItemTag>
                <S.ProjectItemTitle>{title}</S.ProjectItemTitle>
                <S.ProjectItemDescription>{description}</S.ProjectItemDescription>
            </S.ProjectItemContent>
        </S.ProjectItemWrapper>
    </S.ProjectItemLink>
)


ProjectItem.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ProjectItem