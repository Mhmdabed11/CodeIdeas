import React from "react"
import PropTypes from "prop-types"
import Header from "../header/index"
import { css, Global } from "@emotion/core"
import { MainWrapper } from "./index.style.js"
import Footer from "../footer"
import Animation from "../animation"

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
  React.useLayoutEffect(() => {
    if (window) {
      setTheme(window.__theme)
      window.__onThemeChange = () => {
        setTheme(window.__theme)
      }
    }
  }, [])
  const toggleTheme = React.useCallback(() => {
    window.__setPreferredTheme(theme !== DARK ? "dark" : "light")
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
            font-family: "Merriweather", "Georgia", serif;
            transition: background-color 0.2s ease-in;
          }
          .light {
            background-color: ${BG_LIGHT};
            color: ${TYP_LIGHT};
          }
          .dark {
            background-color: ${BG_DARK};
            color: ${TYP_DARK};
          }
        `}
      />
      <Header />
      <Animation />
      <MainWrapper aria-label="toggle between dark and light mode">
        <main>{children}</main>
      </MainWrapper>

      <Footer />
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
