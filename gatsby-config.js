module.exports = {
  assetPrefix:
    process.env.NODE_ENV !== 'development' ? process.env.GATSBY_ASSETPREFIX : '',
  pathPrefix: `/anime3/tarik2002`,
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        extensions: [`.md`, `.mdx`],
      },
    },
  ],
}
