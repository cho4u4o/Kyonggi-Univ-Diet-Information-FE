import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const Center = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  text-align: center;
`

export default function ErrorPage() {
  return (
    <Center>
      <p>잘못된 접근입니다.</p>
      <Link to="/">홈으로 돌아가기</Link>
    </Center>
  )
}
