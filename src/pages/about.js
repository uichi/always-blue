import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const AboutBody = styled.div`
  & p {
    font-size: 16px;
    letter-spacing: 0.1em;
    line-height: 1.4em;
    padding: 0;
    margin: 13px 0;
  }
`

const AboutPage = () => {

  return (
    <Layout title="About" description="いつだって広い海のAboutページです" image="images/profile.jpg">
      <StaticImage
        alt="プロフィール画像"
        src="../../static/images/profile.jpg"
        objectPosition="50% 70%"
        style={{ width: "100%", height: "50vh"}}
      />
      <AboutBody>
        <p>ようこそ、いつだって広い海へ</p>
        <h2>uichi</h2>
        <p>どうも、本サイトを運営しているフルスタックエンジニアのuichiです。</p>
        <p>Web制作会社で3年ほど勤め、2020年10月にフリーランスに転身。</p>
        <p>2021年11月から再び自社開発系の会社で正社員に戻りました。</p>
        <p>フロントもバックエンドも経験し、デザインもやっていたりとフルフルスタックです。</p>
        <p>本ブログは主に技術ブログとして活用していこうと考えています。趣味的な話もたまに投稿していきます。</p>
        <p>趣味は漫画、映画、ドラマ、瞑想、旅行、キャリステクニクスなど幅広いです。最近、東日本を旅してたりもしていました。今期注目しているドラマは日本沈没です。</p>
      </AboutBody>
    </Layout>
  )
}

export default AboutPage