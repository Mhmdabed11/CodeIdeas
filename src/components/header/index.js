import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeContext } from "../layout/index"
import {
  HeaderContainer,
  HeaderWrapper,
  BlogTitle,
  ThemeToggleContainer,
} from "./header.style"
const title = "CodeIdeas"
const DARK = "dark"
const Header2 = props => {
  const themeConsumer = React.useContext(ThemeContext)
  console.log(themeConsumer)
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <div>
          <BlogTitle>{title}</BlogTitle>
        </div>
        <div>
          <ThemeToggleContainer onClick={themeConsumer.toggleTheme}>
            {themeConsumer.theme === DARK ? "☀️" : "🌙"}
          </ThemeToggleContainer>
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header2
