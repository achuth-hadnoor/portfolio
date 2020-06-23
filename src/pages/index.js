import React from "react";
import { Link } from "gatsby";
import styled from "styled-components"; 
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts";

const Home = () => (
    <Layout>
        <StaticQuery
            query={
                graphql`
                    query Pages {
                        allMdx {
                            edges {
                            node {
                                frontmatter {
                                date(fromNow: true)
                                path
                                title
                                tagline
                                tags
                                }
                            }
                            }
                        }
                        }

           `
            }
            render={data => (
                <Wrapper>
                    <Section>
                        <h2 style={{ color: "goldenrod" }}>Articles</h2>
                        {
                            data.allMdx.edges.map((posts, i) => {
                                var post = posts.node.frontmatter
                                return (
                                    <div key={i} style={{padding:10,lineHeight:2}}>
                                        <h2>{post.title}</h2>
                                        <span>{post.date}</span>
                                          <p>{post.tagline}</p>
                                          <ul style={{display:'flex',listStyle:'none'}}>
                                              {
                                               post.tags ? post.tags.map((t,i)=><li key={i} index={"key-"+i} 
                                               style={{padding:'5px 10px',margin:5,fontSize:12,background:'repeating-linear-gradient(45deg, black, transparent 100px)',borderRadius:5}}>{t}</li>) : null
                                              }
                                          </ul>
                                        <Link to={post.path} 
                                            style={{color:'rebeccapurple'}}>
                                            Read more!
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Section>
                </Wrapper>
            )}
        />
    </Layout>
)

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
`;
const Wrapper = styled.div`
  position: relative;
  height: 100%;
`; 