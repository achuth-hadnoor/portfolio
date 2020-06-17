import React from "react";   
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts";

const Blog = () => (
    <Layout>
        <StaticQuery
            query={
                graphql`
                    query blog {
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
            render={data => {
                console.log(data)
                return (
                <div>blog</div>
            )}}
        />
    </Layout>
)

export default Blog;
 