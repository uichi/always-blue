import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components'

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
const AllTagsButton = styled.div`
  background-color: #333;
  border-radius: 3px;
  display: inline-block;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  & a {
    border-radius: 3px;
    color: white;
    display: block;
    text-decoration: none;
    padding: 8px 15px;

    @media (max-width: 768px) {
      padding: 6px 13px;
    }
  }
`

const Tag = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${tag} (${totalCount})`

  return (
    <Layout pageTitle={tagHeader}>
      {edges.map(({ node }) => {
        return (
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
        )
      })}
      <AllTagsButton>
        <Link to="/tags">All tags</Link>
      </AllTagsButton>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tag

export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            date(formatString: "YYYY/MM/DD HH:mm")
            title
            description
          }
        }
      }
    }
  }
`