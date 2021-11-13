const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const tagTemplate = path.resolve("src/templates/tags.js")
  const blogPageTemplate = path.resolve("src/templates/blog-page.js")

  const result = await graphql(`
    {
      postsMdx: allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        totalCount
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // TODO: 環境変数にする
  const PerPage = 20
  const pageCount = Math.ceil(result.data.postsMdx.totalCount / PerPage)

  for (let i = 0; i < pageCount; i++) {
    createPage({
      path: `/blog/${i + 1}`,
      component: blogPageTemplate,
      context: {
        limit: PerPage,
        skip: i * PerPage,
      },
    })
  }
}