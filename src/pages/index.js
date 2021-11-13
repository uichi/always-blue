import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout';

const HomeImage = styled.div`
  box-shadow: 0 5px 10px 0 rgba(0 ,0, 0, .2);
  filter: opacity(80%);
  width: 100%;
  z-index: -1;
`

const IndexPage = () => {
  return (
    <Layout title="ホーム">
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