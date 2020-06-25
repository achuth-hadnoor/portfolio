import React from 'react'
import PropTypes from 'prop-types' 
import styled from 'styled-components'

import Header from '../components/header'
import SideBar from '../components/sidebar'
import { ThemeWrapper } from '../theme/global-style'

const Layout = ({ children }) => {
    return (
        <ThemeWrapper>
            <Wrapper>
                <Header />
                <ContentWrapper>
                    <SideBar />
                    <Content>{children}</Content>
                </ContentWrapper>
            </Wrapper>
        </ThemeWrapper>
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