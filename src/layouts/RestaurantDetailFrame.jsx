import React from 'react'
import Styled from '@emotion/styled'
import RestaurantDetailHeader from '../components/RestaurantDetailHeader'
import { Outlet } from 'react-router-dom'

const Body = Styled.div`
    background-color: #333;
    margin: 0;
  `

const MainDiv = Styled.div`
    background-color: #f5f5f5;
    border-radius: 30px 30px 0 0;
  `

export default function RestaurantDetailFrame() {
  return (
    <Body>
      <RestaurantDetailHeader />
      <MainDiv>
        <Outlet />
      </MainDiv>
    </Body>
  )
}
