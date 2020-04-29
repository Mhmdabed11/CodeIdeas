import styled from "@emotion/styled"
import { Link } from "gatsby"
export const HeaderContainer = styled.div`
  background-color: #000000;
  color: #ffffff;
  width: 100%;
  display: block;
`
export const HeaderWrapper = styled.div`
  max-width: 960px;
  padding: 0.5rem 1.0875rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BlogTitle = styled.h1`
  font-weight: 900;
  text-rendering: optimizeLegibility;
  margin: 0;
`
export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BlogTitleLink = styled(Link)`
  text-decoration: none;
  color: unset;
  h1,
  h2,
  h3 {
    margin: 0;
  }
`
export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`

export const BlogLinks = styled.div`
  align-items: center;
  display: flex;
`
