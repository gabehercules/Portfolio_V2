const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Add slug field for each post

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {
        // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
        const slug = createFilePath({
            node,
            getNode,
            basePath: "pages",
        })

        // Creates new query'able field with name of 'slug'

        createNodeField({
          node,
          name: "slug",
          value: `/portfolio/${slug.slice(12)}`,
      })

      
      createNodeField({
        node,
        name: "slug",
        value: `/blog/${slug.slice(12)}`,
    })

        
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
      
    `).then(result => {
        const posts = result.data.allMarkdownRemark.edges
        const projects = result.data.allMarkdownRemark.edges

        posts.forEach(({ node, next, previous }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/Post/index.js`),
                context: {
                    slug: node.fields.slug,
                    previousPost: next,
                    nextPost: previous
                },
            })
        })

        projects.forEach(({ node, next, previous }) => {
          createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/Project/index.js`),
              context: {
                  slug: node.fields.slug,
                  previousPost: next,
                  nextPost: previous
              },
          })
      })

        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, index) => {
            createPage({
                path: index === 0 ? `/blog` : `/blog/page/${index + 1}`,
                component: path.resolve(`./src/templates/Blog/index.js`),
                context: {
                    limit: postsPerPage,
                    skip: index * postsPerPage,
                    numPages,
                    currentPage: index + 1,
                }
            })
        })

        Array.from({ length: numPages }).forEach((_, index) => {
          createPage({
              path: index === 0 ? `/portfolio` : `/portfolio/page/${index + 1}`,
              component: path.resolve(`./src/templates/Portfolio/index.js`),
              context: {
                  limit: postsPerPage,
                  skip: index * postsPerPage,
                  numPages,
                  currentPage: index + 1,
              }
          })
      })
    })
}
