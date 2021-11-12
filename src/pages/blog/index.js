import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const BlogArticle = styled.article`
  margin-bottom: 40px;

  & a {
    color: #333;
    text-decoration: none;
  }
`
const BlogUl = styled.ul`
padding: 0;
margin: 0;
`
const BlogHeading2 = styled.h2`
  font-size: 32px;
  padding: 0;
  margin: 0;
`
const BlogTime = styled.time`
  font-size: 12.5px;
  letter-spacing: 0.1em;
`
// const BlogBody = styled.div`
//   & p {
//     font-size: 16px;
//     letter-spacing: 0.1em;
//     line-height: 1.2em;
//     padding: 0;
//     margin: 0;
//   }
// `

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <BlogUl>
        {
          data.allMdx.nodes.map((node) => (
            <BlogArticle key={node.id}>
              <BlogTime datetime={node.frontmatter.date}>{node.frontmatter.date}</BlogTime>
              <Link to={`/blog/${node.slug}`}>
                <BlogHeading2>{node.frontmatter.title}</BlogHeading2>
              </Link>
              {/* <BlogBody>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
              </BlogBody> */}
            </BlogArticle>
          ))
        }
      </BlogUl>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage