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
  padding: 1.45rem 1.0875rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const BlogTitle = styled.h1`
  font-weight: 900;
  text-rendering: optimizeLegibility;
  font-family: Montserrat, sans-serif;
  margin: 0;
`
export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  margin-right: 0.75rem;
  &:last-of-type {
    margin-right: 0;
  }
`
