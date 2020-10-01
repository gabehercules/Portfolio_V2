import React from "react"
import PropTypes from "prop-types"

import * as S from "./styled"

const PostItem = ({ slug, category, date, timeToRead, title, description, thumbnail }) => (
    <S.PostItemContainer>
    <S.PostItemLink to={slug}>
        <S.PostItemWrapper>
            <S.PostItemThumb>
                {thumbnail}
            </S.PostItemThumb>
            <S.PostItemContent>
                <S.PostItemTag>{category}</S.PostItemTag>
                <S.PostItemTitle>{title}</S.PostItemTitle>
                <S.PostItemDescription>{description}</S.PostItemDescription>
                <S.PostItemDate>{date} ⋄ {timeToRead} min de leitura</S.PostItemDate>
            </S.PostItemContent>
        </S.PostItemWrapper>
    </S.PostItemLink>
    </S.PostItemContainer>
)

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default PostItem