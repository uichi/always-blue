import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Header from './header'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e6ffff;
    margin: 0;
    padding: 0;
`;

const Main = styled.main`
  width: 700px;
  margin: 0 auto 0;
`
const Heading1 = styled.h1`
  font-size: 40px;
  padding: 0;
  margin: 0 0 50px 0;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <GlobalStyle />
      <Header pageTitle={pageTitle} />
      <Main>
        <Heading1>{pageTitle}</Heading1>
        {children}
      </Main>
    </>
  )
}

export default Layout