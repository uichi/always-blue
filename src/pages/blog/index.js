import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { Pagination } from '../../components/pagination'

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
const BlogCategory = styled.span`
  font-size: 12.5px;
  letter-spacing: 0.1em;
  margin-right: 5px;
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
    padding: 0 0 5px 0;
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

const BlogPage = ({ data }) => {
  return (
    <Layout title="Blog" description="いつだって広い海の技術ブログです">
      {
        data.allMdx.nodes.map((node) => (
          <BlogArticle key={node.id}>
            {(node.frontmatter.categories || []).map(category => (
              <BlogCategory class="post-category">{category}</BlogCategory>
            ))}
            <BlogTime datetime={node.frontmatter.date} itemprop="datepublished">
              {!node.frontmatter.categories || "| "}
              {node.frontmatter.date}
            </BlogTime>
            <time datetime={node.frontmatter.updated_date || ""} itemprop="modified"></time>
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
        ))
      }
      <Pagination totalCount={data.allMdx.totalCount} />
    </Layout>
  )
}

// TODO: limitの値を環境変数にする
export const query = graphql`
  query {
    allMdx(
      limit: 20,
      skip: 0,
      sort: {fields: frontmatter___date, order: DESC},
    ) {
      totalCount
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD HH:mm")
          updated_date(formatString: "YYYY/MM/DD HH:mm")
          title
          description
          categories
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
