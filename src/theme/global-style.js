import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
export const theme = {
    light: {
        accent: '#ffd56a',
        background: {
            primary: '#252538'
        },
        color: {
            primary: '#eee',
        }
    },
    dark: {
        accent: '#ffd56a',
        background: {
            primary: '#eee'
        },
        color: {
            primary: '#1a202c'
        }
    }
}
// @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;  
    color: ${props => props.theme.color.primary};
  }
  body { 
    margin: auto;
    font-family: "Poppins", sans-serif; 
    background:linear-gradient(127.77deg, rgb(17 15 29) 0.62%, rgba(38, 41, 53, 0.89) 72.58%); 
    background-color:${props => props.theme.background.primary};
    padding: 0px;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    position: relative;
    min-height: 100vh;
    
  } 
@media only screen and (max-width: 480px) {
  html { 
  }
}
/*App styles */ 

::-webkit-scrollbar {
  width: 14px;
  height: 14px;
  background:${props => props.theme.background.primary}
}

::-webkit-scrollbar-track {;
  background:${props => props.theme.background.primary}
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #fdd231;
}

::-webkit-scrollbar-button {
  display: none;
  width: 0;
  height: 0;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
} 
#___gatsby {
  display: flex;
  flex-direction: column;
  position: relative;
} 
.App,
#___gatsby,#gatsby-focus-wrapper {
  position: relative;
  height: 100%;
} 
a{
    text-decoration:none;
    color:inherit;
}
`

const ContextTheme = React.createContext();
export const ThemeWrapper = ({children}) => {
    const [value, setValue] = React.useState(theme.light);
    return (
        <ContextTheme.Provider value={{ value, setValue }}>
            <ThemeProvider theme={value}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}