import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './src/layouts'
import { GlobalStyle, theme } from './src/theme/global-style'
import { ThemeContext } from './src/Hooks/theme-provider'

export const wrapRootElement = ({ element }) => {
    const [value,setValue] = React.useState(theme.light)
    return (
    <ThemeContext.Provider value={{value,setValue}}>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>{element}</Layout>
        </ThemeProvider>
    </ThemeContext.Provider>
)}
