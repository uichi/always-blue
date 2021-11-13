import * as React from 'react'
import styled from 'styled-components'

const SiteFooter = styled.footer`
  font-size: 13px;
  text-align: center;
  margin: 70px 0 50px;
`

const Footer = () => {
  return (
    <SiteFooter>
      &copy; 2021 uichi
    </SiteFooter>
  )
}

export default Footer