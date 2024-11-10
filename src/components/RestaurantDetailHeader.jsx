import React from 'react'
import Styled from '@emotion/styled'

const HeaderDiv = Styled.div`
width: 100%;
padding: 10px 40px;
padding-bottom: 40px;
align-items: center;
justify-content: space-between;
display: flex;
box-sizing: border-box;
background-color: #333;
`

const RestaurantName = Styled.span`
font-size: 30px;
font-weight: bold;
font-family: "Pretendard";
color: #fff;
`

const RestaurantTime = Styled.span`
font-size: 15px;
color: #fff;
`

export default function RestaurantDetailHeader() {
  return (
    <HeaderDiv>
      <RestaurantName>경슐랭</RestaurantName>
      <RestaurantTime>10:00 ~ 23:00</RestaurantTime>
    </HeaderDiv>
  )
}
