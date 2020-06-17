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
                                }
                            }
                            }
                        }
                        }

           `
            }
            render={data => (
                <Wrapper>
                    <MainSection>
               
                    </MainSection>
                    <Section>
                        <h2 style={{ color: "goldenrod" }}>Articles</h2>
                        {
                            data.allMdx.edges.map((posts, i) => {
                                var post = posts.node.frontmatter
                                return (
                                    <div key={i} style={{padding:10,lineHeight:2}}>
                                        <h3>{post.title}</h3>
                                        <span>{post.date}</span>
                                        <Link to={post.path}>
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

const MainSection = styled.main`
  max-width: 1030px;
  margin: auto;
  padding: 0px 20px; 
  `;
 