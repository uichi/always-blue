import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled, { createGlobalStyle } from 'styled-components';
import Seo from '../components/seo'
import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e6ffff;
    margin: 0;
    padding: 0;
`;
const HomeFooter = styled.div`
  & footer {
    position: absolute;
    margin: 0 0 10px 0;
    bottom: 0;
    right: 50%;
    transform: translateX(50%)
  }
`

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Seo title="ホーム" />
      <StaticImage
        alt="いつだって広い海"
        src="../images/always-blue.jpg"
        style={{
          boxShadow: "0 5px 10px 0 rgba(0 ,0, 0, .2)",
          filter: "opacity(80%)",
          objectPosition: "50% bottom",
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: "-1",
          width: "100%",
          height: "100vh",
        }}
      />
      <HomeFooter>
        <Footer />
      </HomeFooter>
    </>
  )
}

export default IndexPage