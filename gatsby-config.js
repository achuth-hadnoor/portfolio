const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Achuth Hadnoor | Achuth Hadnoor | Designer / Developer / Maker ',
    description:
      'Achuth hadnoor is a designer developer and an indie maker .Since 2018 he launched apps on Producthunt. Snipper is an app for developers to save code snippets right in menubar.He also launched snip and snipnote productivity apps. ',
    author: '@achuth_hadnoor',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/layouts/blog.js') },
        blogLayouts: { default: path.resolve('./src/layouts/blog.js') },
        postLayouts: { default: path.resolve('./src/layouts/post.js') },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Achuth hadnoor',
        short_name: 'Achuth',
        start_url: '/',
        background_color: '#1a202c',
        theme_color: '#fdd231',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
