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
    margin: 12px 0;
  }
`
const BlogTime = styled.time`
  font-size: 12.5px;
  letter-spacing: 0.1em;
`
const Heading1 = styled.h1`
  font-size: 40px;
  padding: 0;
  margin: 0 0 30px 0;
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogTime datetime={data.mdx.frontmatter.date}>{data.mdx.frontmatter.date}</BlogTime>
      <Heading1>{data.mdx.frontmatter.title}</Heading1>
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
        date(formatString: "YYYY年MM月DD日")
      }
      body
    }
  }
`


export default BlogPost