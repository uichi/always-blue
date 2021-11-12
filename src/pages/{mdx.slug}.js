import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>My blog post contents will go here (eventually).</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`


export default BlogPost