// import React from "react"
// import PropTypes from "prop-types"
// import kebabCase from "lodash/kebabCase"
// import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"

// const Tags = ({
//   data: {
//     allMdx: { group },
//   },
// }) => (
//   <Layout>
//     <h1>Tags</h1>
//     <ul>
//       {group.map(tag => (
//         <li key={tag.fieldValue}>
//           <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//             {tag.fieldValue} ({tag.totalCount})
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )
// Tags.propTypes = {
//   data: PropTypes.shape({
//     allMdx: PropTypes.shape({
//       group: PropTypes.arrayOf(
//         PropTypes.shape({
//           fieldValue: PropTypes.string.isRequired,
//           totalCount: PropTypes.number.isRequired,
//         }).isRequired
//       ),
//     }),
//   }),
// }
// export default Tags

// export const pageQuery = graphql`
//   query {
//     allMdx {
//       group(field: frontmatter___tags) {
//         totalCount
//         fieldValue
//       }
//     }
//   }
// `