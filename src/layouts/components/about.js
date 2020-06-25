import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

export default ()=>{
    const {site} = useStaticQuery(graphql`
    query About {
        site {
            siteMetadata {
            author
            description
            title
            }
           }
        }
    `)
    const {siteMetadata} = site
    console.log(siteMetadata)
    return(
        <div>sadasd</div>
    )
}