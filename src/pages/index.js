import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { dribbble, twitter, medium, instagram } from "react-icons-kit/fa";
import Loading from "../components/Loading";
import Header from '../components/header'
import { StaticQuery, graphql } from 'gatsby'

const Home = () => (
    <>
        <StaticQuery
            query={
                graphql`
                    query MyQuery {
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
                    {/* <Loading /> */}
                    <Header />
                    <MainSection>
                        <Hand>🖐</Hand>
                        <h1 className="title">
                            <div>
                                <span className="line-bg">Namaste!,</span>
                            </div>
                            <span className="line-bg">I'm Achuth!</span>
                            <br />
                            <span className="line-bg">
                                A full - time developer,
              <br />
                            </span>
                            <span className="line-bg">
                                wanna be Designer and an {""}
                                <a href="https://snipper.netlify.com">
                                    indie maker
              </a>
                            </span>
                        </h1>
                        <Motto>
                            <i>" To be creative is to keep Creating "</i>
                            <sub>- Motto</sub>
                        </Motto>
                        <Details>
                            <p>
                                Achuth hadnoor is a designer developer and an indie maker. Since
              2018 he launched apps as an{" "}
                                <a href="https://producthunt.com/@achuthhadnoor" >
                                    indie maker
              </a>
              .
            </p>
                            <h5>Follow my Journey</h5>
                            <a href="https://dribbble.com/achuth_hadnoor"  >
                                <Icon icon={dribbble} />
                            </a>
                            <a href="https://twitter.com/achuth_hadnoor" >
                                <Icon icon={twitter} />
                            </a>
                            <a href="https://medium.com/@achuth.hadnoor"  >
                                <Icon icon={medium} />
                            </a>
                            <a href="https://www.instagram.com/uiuxdx" >
                                <Icon icon={instagram} />
                            </a>
                        </Details>
                    </MainSection>
                    <Section>
                        <h2 style={{ color: "goldenrod" }}>Articles</h2> 
                        {
                            data.allMdx.edges.map((posts,i) => {
                                var post = posts.node.frontmatter
                                return (
                                    <div key={i}>
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
    </>
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

const Motto = styled.div`
  i {
    padding: 5px;
    border-left: 2px solid #0000ee;
  }
`;
const Details = styled.div`
  position: relative;
  line-height: 1.7em;
  max-width: 400px;
  svg {
    padding: 0px 10px;
    border-right: 1px solid #aaa;
    font-size: 16px;
  }
  margin-bottom: 100px;
  p a {
    color: goldenrod;
  }
`;
const Hand = styled.span`
font-size:72px;
transform:rotate(45deg);

`