import React from "react"
import { ThemeContext } from "../layout/index"
import {
  HeaderContainer,
  HeaderWrapper,
  BlogTitle,
  ThemeToggleContainer,
  BlogTitleLink,
  Img,
} from "./header.style"

const title = "CodeIdeas"
const DARK = "dark"

const moonImage = <Img src={require("../../../assets/moon.png")} alt="moon" />
const sunImage = <Img src={require("../../../assets/sun.png")} alt="sun" />

const Header2 = props => {
  const themeConsumer = React.useContext(ThemeContext)
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <BlogTitleLink to="/">
          <BlogTitle>{title}</BlogTitle>
        </BlogTitleLink>
        <div>
          <ThemeToggleContainer onClick={themeConsumer.toggleTheme}>
            {themeConsumer.theme === DARK ? sunImage : moonImage}
          </ThemeToggleContainer>
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header2
