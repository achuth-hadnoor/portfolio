import React from "react";
import { Link, useStaticQuery } from "gatsby";
import styled from "styled-components"; 
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts";

const Home = () => {
    const {allMdx} = useStaticQuery(graphql`
        query BlogMeta {
            allMdx {
                edges {
                    node {
                        frontmatter {
                            date(fromNow: false)
                            path
                            tagline
                            tags
                            title
                        }
                    }
                }
            }
        }
    `)
    const {edges} = allMdx; 
    return (
    <Layout>
         <Wrapper>
            <Section>
                <h2 style={{ color: "goldenrod" }}>Articles</h2>
                {
                    edges.map((posts, i) => {
                        var post = posts.node.frontmatter
                        const {title,date,tags,tagline,path} = post
                        return (
                            <div key={i} style={{padding:10,lineHeight:2}}>
                                <h2>{title}</h2>
                                <span>{date}</span>
                                    <p>{tagline}</p>
                                    <ul style={{display:'flex',listStyle:'none'}}>
                                        {
                                        tags ? post.tags.map((t,i)=><li key={i} index={"key-"+i} 
                                        style={{padding:'5px 10px',margin:5,fontSize:12,background:'repeating-linear-gradient(45deg, black, transparent 100px)',borderRadius:5}}>{t}</li>) : null
                                        }
                                    </ul>
                                <Link to={path} 
                                    style={{color:'rebeccapurple'}}>
                                    Read more!
                                </Link>
                            </div>
                        )
                    })
                }
            </Section>
        </Wrapper>          
    </Layout>
)}

export default Home;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1030px;
  padding: 10px;
  .posts-link {
    color: #aaa;
  }
  .posts-link :hover {
    color: #fff;
  }
  h2{
      font-size:24px;
      padding:5px 10px ;
  }
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
`; 