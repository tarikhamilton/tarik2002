exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const component = require.resolve(`./src/templates/page.js`)

  return graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.path,
        },
      })
    })
  })
}
