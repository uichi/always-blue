import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react"
import styled from 'styled-components'
import CodeBlock from '../../components/codeBlock'
import kebabCase from "lodash/kebabCase"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const components = {
  pre: CodeBlock
}

const BlogCategoriesUl = styled.div`
  font-size: 12.5px;
  letter-spacing: 0.1em;
  list-style: none;
  margin: 0;
  padding: 0;
`
const BlogCategoryLi = styled.span`
  letter-spacing: 0.1em;
  margin-right: 5px;
`
const BlogTime = styled.time`
  font-size: 12.5px;
  letter-spacing: 0.1em;
`
const ImageCredit = styled.p`
  font-size: 12.5px;
  margin: 5px 0;
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

  & img {
    width: 100%;
  }
`

const BlogPost = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(data.mdx.frontmatter.hero_image)
  const heroImageCreditText = data.mdx.frontmatter.hero_image_credit_text
  const heroImageCreditLink = data.mdx.frontmatter.hero_image_credit_link
  let src = null
  if (image) src = image.images.fallback.src.slice(1)

  return (
    <Layout title={data.mdx.frontmatter.title} description={data.mdx.frontmatter.description} image={src}>
      <BlogCategoriesUl>
        Category{" : "}
        {(data.mdx.frontmatter.categories || []).map(category => (
          <BlogCategoryLi class="post-category">{category}</BlogCategoryLi>
        ))}
      </BlogCategoriesUl>
      <BlogTime datetime={data.mdx.frontmatter.date} itemprop="datepublished">Created{" : "}{data.mdx.frontmatter.date}</BlogTime>
      <time datetime={data.mdx.frontmatter.updated_date || ""} itemprop="modified"></time>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <ImageCredit>
        {(() => {
          if (!heroImageCreditText) return false;
          if (heroImageCreditLink) {
            return (
              <>
                Photo Credit:{" "}
                <a href={heroImageCreditLink}>
                  {heroImageCreditText}
                </a>
              </>
          )} else {
            return (
              <>
                Photo Credit:{" "}
                {heroImageCreditText}
              </>
            )
          }
        })()}
      </ImageCredit>
      <TagsUl>
        {(data.mdx.frontmatter.tags || []).map(tag => (
          <TagLi key={tag}>
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
        date(formatString: "YYYY/MM/DD HH:mm")
        updated_date(formatString: "YYYY/MM/DD HH:mm")
        title
        description
        categories
        tags
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`


export default BlogPost
