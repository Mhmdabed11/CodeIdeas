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
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            margin: 0;
            paddding: 0;
          }
          body {
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background-color: ${theme === LIGHT ? "#ffffff" : "#000000"};
            color: ${theme === LIGHT ? "#000000" : "#ffffff"};
            transition: background-color 0.2s ease-in, color 0.2s ease-in;
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
