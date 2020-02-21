import React from "react"
import { ThemeContext } from "../layout/index"
import {
  HeaderContainer,
  HeaderWrapper,
  BlogTitle,
  ThemeToggleContainer,
  BlogTitleLink,
  Img,
  BlogLinks,
} from "./header.style"
import Switch from "../switch"
const DARK = "dark"

const moonImage = <Img src={require("../../../assets/moon.png")} alt="moon" />
const sunImage = <Img src={require("../../../assets/sun.png")} alt="sun" />
const Header2 = props => {
  const themeConsumer = React.useContext(ThemeContext)

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <BlogTitleLink to="/">
          <BlogTitle>M.ABED</BlogTitle>
        </BlogTitleLink>

        <BlogLinks>
          <BlogTitleLink to="/blog">
            <h3>Blog</h3>
          </BlogTitleLink>
        </BlogLinks>

        <ThemeToggleContainer role="presentation">
          <Switch
            isOn={themeConsumer.theme === DARK}
            onToggle={themeConsumer.toggleTheme}
          />
        </ThemeToggleContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header2
