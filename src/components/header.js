import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 60px;

  @media (max-width: 768px) {
    display: block;
    justify-content: none;
    margin: 0 auto 30px;
    width: 95%;
  }
`
const SiteTitle = styled.div`
  font-family: ten-mincho,serif;
  font-size: 40px;
  text-shadow: 1px 2px 3px rgb(0 0 0 / 40%);

  & a {
    color: #333;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0 0 5px 0;
  }
`
const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`
const Headerli = styled.li`
  background-color: #333;
  box-shadow: 0 5px 10px 0 rgba(0 ,0, 0, .4);
  border-radius: 3px;
  font-size: 20px;
  margin-right: 10px;

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

const Header = () => {
  return (
    <>
      <SiteHeader>
        <SiteTitle><Link to="/">いつだって広い海</Link></SiteTitle>
        <nav>
          <HeaderUl>
            <Headerli><Link to="/">Home</Link></Headerli>
            <Headerli><Link to="/blog">Blog</Link></Headerli>
            <Headerli><Link to="/tags">Tags</Link></Headerli>
            <Headerli><Link to="/about">About</Link></Headerli>
          </HeaderUl>
        </nav>
      </SiteHeader>
    </>
  )
}

export default Header