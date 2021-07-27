import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import headerLogo from '../assets/hd_logo.png'
import share from '../assets/ic_share.png'
import language from '../assets/ic_language.png'

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
    color: #fff;
    column-gap: 6rem;
  }

  #header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1.5rem;
    padding: 0 2rem;
    span {
      width: 25px;
      height: 25px;
      &:nth-child(2) {
        color: #838383;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <div id="header-logo">
        <Link to="/"><img src={headerLogo} alt="Logo on the main navigation"/></Link>
      </div>
      <ul>
        <li>메인</li>
        <li>사전예약</li>
        <li>트레일러</li>
        <li>소셜 미디어</li>
      </ul>
      <div id="header-right">
        <span><img src={share} alt="SNS share icon"/></span>
        <span>|</span>
        <span><img src={language} alt="Language change option"/></span>
      </div>
    </HeaderWrapper>
  )
}
