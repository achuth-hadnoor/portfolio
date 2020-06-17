import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit';
import { dribbble } from 'react-icons-kit/fa';
import { github, twitter, chevronRight, instagram } from 'react-icons-kit/feather'; 
export default class SideBar extends Component {
    render() {
        return (
            <SideBarWrapper>
                <Image></Image>
                <Name>Achuth hadnoor</Name>
                <Motto>" To be creative is to keep creating " <sub>- Motto</sub></Motto>
                <div style={{ display: 'flex', marginTop: '10px' }}>
                    <a href="https://dribbble.com/achuth_hadnoor" target="_blank" rel="noreferrer" >
                        <Icon icon={dribbble} style={{ padding: 10 }} />
                    </a>
                    <a href="https://twitter.com/achuth_hadnoor" target="_blank" rel="noreferrer" >
                        <Icon icon={twitter} style={{ padding: 10 }} />
                    </a>
                    <a href="https://github.com/achuthhadnoor" target="_blank" rel="noreferrer" >
                        <Icon icon={github} style={{ padding: 10 }} />
                    </a>
                    <a href="https://instagram.com/uiuxdx" target="_blank" rel="noreferrer">
                        <Icon icon={instagram} style={{ padding: 10 }} />
                    </a>
                </div>

                <About>A full-stack developer, UI/UX designer and indie maker</About>
                <Form onSubmit={() => {
                    debugger;
                }}>
                    <Input type="email" placeholder="Subscribe to my newsletter" />
                    <Button type="submit" onClick={() => { }}>
                        <Icon icon={chevronRight} />
                    </Button>
                </Form>
                <TagsWrapper>
                    <div className="popular_tags">Popular Tags</div>
                    <ul className="tagsWrapper">
                        <li># reactJs</li>
                        <li># reactJs</li>
                        <li># reactJs</li>
                        <li># reactJs</li>
                        <li># reactJs</li>
                    </ul>
                </TagsWrapper>
            </SideBarWrapper>
        )
    }
}


const SideBarWrapper = styled.div` 
padding:10px; 
.tagsWrapper {
    list-syle:none;
    li{
        display:inline-block;
        padding:10px;
    }
}
`;

const Image = styled.div`
height:150px;
width:150px;
border-radius:50%;
background:#222
`
const Name = styled.div` 
    padding:15px 10px;
    color:${props => props.theme.accent}
`
const Motto = styled.div`
    border-left: 1px solid ${props => props.theme.accent};
    padding:0px 10px;
    font-size:85%;
    sub{
        font-size:75%;
    }

`

const About = styled.p`
    padding: 10px;
    font-size: 18px;
    line-height: 1.5;
`

const Form = styled.form`
    display: inline-block;
    background:${props => props.theme.color.primary};
    padding: 2px;
    border-radius: 5px;
    margin:15px 0px;
    .submit{
        color:${props => props.theme.color.primary};
    }
`
const Input = styled.input`
    border-radius: 5px;
    border: none;
    padding: 5px;
`
const Button = styled.button`
    border: none;
    background: ${props => props.theme.background.primary};
    color:${props => props.theme.color.primary};
    padding: 5px 10px;
    border-radius: 0px 5px 5px 0px;
`;

const TagsWrapper = styled.div`
    .popular_tags{
        color: ${props => props.theme.accent};
        padding:10px;
    }    
    .tagsWrapper{
        list-style:none;
        li{
            display:inline-block;
        }
    }
`