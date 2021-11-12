import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

const HomeImage = styled.div`
  filter: opacity(80%);
  width: 100%;
  z-index: -1;
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