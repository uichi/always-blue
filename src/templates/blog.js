import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'
import { Pagination } from "../components/pagination"

const BlogArticle = styled.article`
  margin-bottom: 40px;

  & a {
    color: #333;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`
const BlogTime = styled.time`
  font-size: 12.5px;
  letter-spacing: 0.1em;
`
const BlogHeading2 = styled.h2`
  font-size: 32px;
  padding: 0 0 10px 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const BlogP = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
  }
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

const Blog = ({ data }) => {
  return (
    <Layout pageTitle={"Blog"}>
      {data.allMdx.edges.map(({ node }) => (
        <BlogArticle key={node.id}>
        <BlogTime datetime={node.frontmatter.date}>{node.frontmatter.date}</BlogTime>
        <Link to={`/blog/${node.slug}`}>
          <BlogHeading2>{node.frontmatter.title}</BlogHeading2>
          <BlogP>{node.frontmatter.description}</BlogP>
        </Link>
        {/* <BlogBody>
          <MDXRenderer>
            {node.body}
          </MDXRenderer>
        </BlogBody> */}
      </BlogArticle>
      ))}
      <Pagination totalCount={data.allMdx.totalCount} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "YYYY/MM/DD HH:mm")
            title
            description
          }
          id
          slug
        }
      }
      totalCount
    }
  }
`