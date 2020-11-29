import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

export const Wrapper = styled(Img)`
  width: 100%;
  height: 100%;
  ${media.lessThan("medium")`
  `}
`
