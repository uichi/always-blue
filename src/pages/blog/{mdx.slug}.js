import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'
import CodeBlock from '../../components/codeBlock'

const components = {
  pre: CodeBlock
}

const BlogTime = styled.time`
font-size: 12.5px;
letter-spacing: 0.1em;
`
const Heading1 = styled.h1`
font-size: 40px;
padding: 0;
margin: 0 0 30px 0;

@media (max-width: 768px) {
  font-size: 24px;
  margin: 0 0 20px 0;
}
`
const BlogBody = styled.div`
  & p {
    font-size: 16px;
    letter-spacing: 0.1em;
    line-height: 1.4em;
    padding: 0;
    margin: 13px 0;
  }
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <BlogTime datetime={data.mdx.frontmatter.date}>{data.mdx.frontmatter.date}</BlogTime>
      <Heading1>{data.mdx.frontmatter.title}</Heading1>
      <BlogBody>
        <MDXProvider components={components}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
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