//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     />
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "../header/index"
import { css, Global } from "@emotion/core"
import { MainWrapper } from "./index.style.js"

const LIGHT = "light"
const DARK = "dark"
const BG_DARK = "#10171e"
const BG_LIGHT = "#e6ecf0"
const TYP_DARK = "rgba(255,255,255,0.8)"
const TYP_LIGHT = "#14171a"
export const ThemeContext = React.createContext()
const { Provider } = ThemeContext
const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState(null)
  // toggle theme function using React.useCallback to memoize version of function and not create one on each render
  React.useEffect(() => {
    const mode = localStorage.getItem("mode")
    if (mode) setTheme(mode)
    else setTheme(LIGHT)
  }, [])
  const toggleTheme = React.useCallback(() => {
    theme === LIGHT ? setTheme(DARK) : setTheme(LIGHT)
  }, [theme])

  React.useEffect(() => {
    localStorage.setItem("mode", theme)
  }, [theme])

  const value = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    }
  }, [theme, toggleTheme])

  return (
    <Provider value={value}>
      <Global
        styles={css`
          html {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: ${theme === LIGHT ? BG_LIGHT : BG_DARK};
            color: ${theme === LIGHT ? TYP_LIGHT : TYP_DARK};
            font-family: "Merriweather", "Georgia", serif;
          }
        `}
      />
      <Header />
      <MainWrapper>{theme ? <main>{children}</main> : null}</MainWrapper>
      <footer />
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
