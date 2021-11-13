import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

const TagsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`
const Tagli = styled.li`
  margin-bottom: 10px;

  & a {
    color: #333;
    text-decoration: none;
  }
`
const TagHeading2 = styled.h2`
  font-size: 24px;
  padding: 0 0 10px 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

const TagsPage = ({
  data: {
    allMdx: { group }
  },
}) => (
  <Layout title={"Tags"} description="いつだって広い海のタグリストです">
    <TagsUl>
      {group.map(tag => (
        <Tagli key={tag.fieldValue}>
          <TagHeading2>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </TagHeading2>
        </Tagli>
      ))}
    </TagsUl>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default TagsPage

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`