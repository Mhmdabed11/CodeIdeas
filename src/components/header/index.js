import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeContext } from "../layout/index"
import {
  HeaderContainer,
  HeaderWrapper,
  BlogTitle,
  NavLink,
} from "./header.style"
import Switch from "../switch"
const title = "CodeIdeas"
const homeLink = "Home"
const blogLink = "Blog"
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
          <NavLink to="#">{homeLink}</NavLink>
          <NavLink to="#">{blogLink}</NavLink>
          {/* <button onClick={themeConsumer.toggleTheme}>Dark mode</button> */}
          <Switch
            onToggle={themeConsumer.toggleTheme}
            checked={themeConsumer.theme === DARK}
          />
        </div>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header2
