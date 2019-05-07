exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create post", result.errors)
  }

  const posts = result.data.allMdx.edges
  posts.forEach(post => {
    actions.createPage({
      path: post.node.frontmatter.slug,
      component: require.resolve("./src/templates/post/"),
      context: {
        slug: post.node.frontmatter.slug,
      },
    })
  })
}
