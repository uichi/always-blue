import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

const HomeImage = styled.div`
  position: absolute;
  filter: opacity(80%);
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  z-index: -1;

  @media (max-width: 768px) {
    width: 95%;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <HomeImage>
        <StaticImage
          alt="いつだって広い海"
          src="../images/always-blue.jpg"
        />
      </HomeImage>
    </Layout>
  )
}

export default IndexPage