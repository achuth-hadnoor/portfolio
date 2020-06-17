import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
 

const Blog = ({ children }) => {
    return (
        <StaticQuery
            query={graphql`
                                query BlogTitleQuery {
                                    site {
                                        siteMetadata {
                                            title
                                        }
                                    }
                                }
                        `}
            render={data => { 
                return (
                    <Wrapper>  
                        {children} 
                    </Wrapper>
                )
            }}
        />
    )
}

Blog.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Blog

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`;