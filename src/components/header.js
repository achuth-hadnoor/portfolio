import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
export default () => {
    return ( 
         <HeaderWrapper className="header">
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/now">Now</Link>
            </Nav>
        </HeaderWrapper> 
)};
const HeaderWrapper = styled.header`
    display:flex;
    justify-content:flex-end;
    padding:10px;
    max-width:800px;
    width:100%;
    margin:auto;
`;
const Nav = styled.nav` 
    margin-top:20px;
    a{
        padding:10px;
    }
`
 