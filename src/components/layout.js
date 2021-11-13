import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './header'
import Footer from './footer'
import SEO from './seo'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e6ffff;
    margin: 0;
    padding: 0;
`;

const Main = styled.main`
  width: 700px;
  margin: 0 auto 0;

  @media (max-width: 768px) {
    width: 95%;
  }
`
const Heading1 = styled.h1`
  font-size: 40px;
  padding: 0;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`

const Layout = ({ title, description, children }) => {
  return (
    <>
      <GlobalStyle />
      <SEO title={title} description={description} />
      <Header />
      <Main>
        <Heading1>{title}</Heading1>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout