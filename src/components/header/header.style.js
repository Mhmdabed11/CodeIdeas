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
  background-color: transparent;
  border: none;
  font-size: 25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  line-height: 50px;
  &:focus {
    box-shadow: 0 0 2px 3px #ffa7c4;
    outline: none;
  }
  &:active {
    box-shadow: 0 0 2px 3px #ffa7c4;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BlogTitleLink = styled(Link)`
  text-decoration: none;
  color: unset;
`
export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
`
export const Logo = styled.img`
  width: 100px;
  margin: 0;
`
