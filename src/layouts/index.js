import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './../theme/global-style'
import { ThemeContext } from './../Hooks/theme-provider'

const Layout = ({ children }) => {
    const [value, setValue] = React.useState(theme.light)
    return (
        <StaticQuery
            query={graphql`
                                query SiteTitleQuery {
                                    site {
                                        siteMetadata {
                                            title
                                        }
                                    }
                                }
                        `}
            render={data => {
                console.log(value);
                return (
                    <ThemeContext.Provider value={{ value, setValue }}>
                        <ThemeProvider theme={value}>
                            <GlobalStyle />
                            <Header />
                            <div
                                style={{
                                    margin: '0 auto',
                                    maxWidth: 960,
                                    padding: '0px 1.0875rem 1.45rem',
                                    paddingTop: 0,
                                }}
                            >
                                {children}
                            </div>
                        </ThemeProvider>
                    </ThemeContext.Provider>
                )
            }}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
