import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const BlogBody = styled.div`
  & p {
    font-size: 16px;
    letter-spacing: 0.1em;
    line-height: 1.2em;
    padding: 0;
    margin: 0;
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <BlogBody>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </BlogBody>
    </Layout>
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