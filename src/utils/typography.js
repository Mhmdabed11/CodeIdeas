import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Rubik",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
})
export const { scale, rhythm, options } = typography
export default typography
