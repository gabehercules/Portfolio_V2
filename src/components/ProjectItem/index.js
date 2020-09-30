import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const ProjectItem = ({slug, thumbnail}) => (
    <S.ProjectSection>
        <S.ProjectLink to="{slug}">
            <S.ProjectWrapper>
                ola
            </S.ProjectWrapper>
        </S.ProjectLink>
    </S.ProjectSection>
)

ProjectItem.propTypes = {
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
}

export default ProjectItem