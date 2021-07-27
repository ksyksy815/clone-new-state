import React from 'react'
import styled from 'styled-components'
import bgTop from '../assets/bg_top_m.jpeg'
import logo from '../assets/logo.png'

const Section1Wrapper = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    img {
      width: 100%;
    }
  }

  #main-desc {
    position: absolute;
    padding-top: 20%;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      color: #fff;
      font-size: 38px;
      
      &:nth-child(2) {
        margin-top: -2rem;
      }
    }

    #main-desc-btnBox {
      display: flex;
      column-gap: 1rem;
      margin-top: 2rem;
      button {
        width: 260px;
        height: 75px;
        border: none;
        font-size: 18px;
        font-weight: bold;

        &:first-child {
          background-color: #f2a900;
          color: #000;
          &:hover {
            cursor: pointer;
            background-color: #d99800;
          }
        }
        &:nth-child(2) {
          background-color: #fff;
          &:hover {
            cursor: pointer;
            background-color: #e4e4e4;
          }
        }
        &:last-child {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          &:hover {
            cursor: pointer;
            background-color: rgba(0,0,0,0.25);
          }
        }
      }
    }
  }
`

export default function Section1() {
  return (
    <Section1Wrapper>
      <div className="background">
        <img src={bgTop} alt="A man wearing Samdduk is stairing at you!"/>
      </div>
      <div id="main-desc">
        <p><img src={logo} alt="logo"></img></p>
        <p>BEYOND BATTLE ROYALE</p>
        <div id="main-desc-btnBox">
          <button>사전예약하기</button>
          <button>트레일러 보기</button>
          <button>팔로우하기</button>
        </div>
      </div>
    </Section1Wrapper>
  )
}
