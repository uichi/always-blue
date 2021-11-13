import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'
import CodeBlock from '../../components/codeBlock'
import kebabCase from "lodash/kebabCase"

const components = {
  pre: CodeBlock
}

const BlogTime = styled.time`
font-size: 12.5px;
letter-spacing: 0.1em;
`
const TagsUl = styled.ul`
  border-radius: 3px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px 0 10px;
`
const TagLi = styled.li`
  font-size: 16px;
  border-radius: 5px;
  background: #e0ffff;
  box-shadow: inset 7px 7px 14px #c7e3e3,
              inset -7px -7px 14px #f9ffff;
  margin: 0 8px 0 0;
  & a {
    color: #333;
    display: block;
    text-decoration: none;
    padding: 3px 10px;
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
    <Layout pageTitle={data.mdx.frontmatter.title} pageDescription={data.mdx.frontmatter.description}>
      <BlogTime datetime={data.mdx.frontmatter.date}>{data.mdx.frontmatter.date}</BlogTime>
      <TagsUl>
        {data.mdx.frontmatter.tags.map(tag => (
          <TagLi>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag}
            </Link>
          </TagLi>
        ))}
      </TagsUl>
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
        date(formatString: "YYYY/MM/DD/ HH:mm")
        title
        description
        tags
      }
      body
    }
  }
`


export default BlogPost