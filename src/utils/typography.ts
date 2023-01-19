import Typography from "typography"

import theme from "typography-theme-us-web-design-standards"

theme.baseFontSize = "14px";

const typography = new Typography(theme)
const { scale, rhythm, options } = typography

// Export helper functions
export { scale, rhythm, options }
export default typography