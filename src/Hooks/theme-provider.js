import React from 'react'

export const ThemeContext = React.createContext();

export const ThemeConsumer = ({children})=>{
    console.log('value')
    return(<ThemeContext.ThemeConsumer>
    {
        (sample)=>(<>{children}</>)
    }
</ThemeContext.ThemeConsumer>)}