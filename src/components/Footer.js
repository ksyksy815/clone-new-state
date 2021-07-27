import React from 'react'
import styled from 'styled-components'
import logo from '../assets/ft_logo.png'

const FooterWrapper = styled.footer`
  width: 100vw;
  background-color: #000000;
  color: #838383;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 3rem;
  padding: 70px 60px 60px;

  #footer-box {
    display: flex;
    flex-direction: column;
    row-gap: 0.8rem;
  }
  ul {
    list-style: none;
    display: flex;
    column-gap: 1rem;
    li {
      &:nth-child(2) {
        color: #fff;
      }
    }
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        <img src={logo} alt="PUBG and KRAFTON logo"/>
      </div>
      <div id="footer-box">
        <ul>
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>사업 제휴 문의</li>
        </ul>
        <span>&copy; 2021 KRAFTON, Inc. All Rights Reserved.</span>
      </div>
    </FooterWrapper>
  )
}
