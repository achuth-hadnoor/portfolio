const React = require('react')
const { ThemeProvider } = require('styled-components') 
const  { GlobalStyle, theme } = require('./src/theme/global-style')
const  { ThemeContext } = require('./src/Hooks/theme-provider')

const WrapRootElement = ({ element }) => {
    const [value,setValue] = React.useState("light") 
    return (
    <ThemeContext.Provider value={{value,setValue}}>
        <ThemeProvider theme={value === "light" ? theme.light : theme.dark }>
            <GlobalStyle />
             {element} 
        </ThemeProvider>
    </ThemeContext.Provider>
)}
const Wrapper = ({ element }) => {
  return <WrapRootElement element={element} />
}
exports.wrapRootElement = Wrapper