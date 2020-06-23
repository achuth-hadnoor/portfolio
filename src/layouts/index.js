import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/header'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './../theme/global-style'
import { ThemeContext } from './../Hooks/theme-provider'
import SideBar from '../components/sidebar'

const Layout = ({ children }) => {
    const [value, setValue] = React.useState(theme.light)
    return (
        <StaticQuery
            query={graphql`
                   query postsData {
                        allSite {
                            edges {
                            node {
                                siteMetadata {
                                title
                                description
                                author
                                }
                            }
                            }
                        }
                        allMdx {
                            edges {
                            node {
                                frontmatter {
                                tags
                                }
                            }
                            }
                        }
                        }
                        `}
            render={data => {
                console.log(data);
                
                return (
                    <ThemeContext.Provider value={{ value, setValue }}>
                        <ThemeProvider theme={value}>
                            <GlobalStyle />
                            <Wrapper>
                                <Header />
                                <ContentWrapper>
                                    <SideBar data={data}/>
                                    <Content>{children}</Content>
                                </ContentWrapper>
                            </Wrapper>
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

const Wrapper = styled.div`
display:flex;
flex-direction:column;
max-width:1080px;
margin:auto;
`;
const ContentWrapper = styled.div`
display:flex;
@media only screen and (max-width: 600px) {
  &{
      flex-direction:column;
  }
}
`;

const Content = styled.div``