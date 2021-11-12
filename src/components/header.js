import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #e6ffff;
  }
`
const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 10px 20px 40px;

  @media (max-width: 768px) {
    display: block;
    justify-content: none;
  }
`
const SiteTitle = styled.div`
  font-family: ten-mincho,serif;
  font-size: 40px;

  & a {
    color: #333;
    text-decoration: none;
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
  border-radius: 3px;
  font-size: 20px;
  margin: 5px;

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

const Header = ({ pageTitle }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang="ja" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageTitle} />
        <script type="application/javascript" defer>
          {`{(function(d) {
            var config = {
              kitId: 'wfh1srg',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);}
          `}
        </script>
      </Helmet>
      <SiteHeader>
        <SiteTitle><Link to="/">いつだって広い海</Link></SiteTitle>
        <nav>
          <HeaderUl>
            <Headerli><Link to="/">Home</Link></Headerli>
            <Headerli><Link to="/blog">Blog</Link></Headerli>
            <Headerli><Link to="/about">About</Link></Headerli>
          </HeaderUl>
        </nav>
      </SiteHeader>
    </>
  )
}

export default Header