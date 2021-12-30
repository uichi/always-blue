import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PaginationUl = styled.ul`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 10px;
`
const PaginationLi = styled.li`
  font-size: 20px;
  border-radius: 10px;
  background: #e0ffff;
  box-shadow: 5px 5px 10px #bed9d9,
              -5px -5px 10px #ffffff;
  margin: 0 8px;
  & a {
    color: #333;
    display: block;
    text-decoration: none;
    padding: 6px 15px;
  }
`

export const Pagination = ({ totalCount }) => {
  // TODO: 環境変数にする
  const PER_PAGE = 20

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <PaginationUl>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <PaginationLi key={index}>
          <Link to={`/blog/${number}`}>{number}</Link>
        </PaginationLi>
      ))}
    </PaginationUl>
  )
}
