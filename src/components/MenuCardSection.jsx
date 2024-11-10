import React, { useState } from 'react'
import styled from '@emotion/styled'
import dormMenus from '../datas/dormMenus.json'

const MenuCardContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const MenuSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60vh;
  border: none;
  border-radius: 15px;
  background-color: #fff;
  margin-right: 20px;

  @media (max-width: 480px) {
    border-radius: 30px 30px 0 0;
    border: none;
    width: 80vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    margin: 0;
  }
`

const MenuCard = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 80vw;
  height: 60vh;
  border: none;
  border-radius: 30px;
  background-color: #fff;
  padding: 20px;
  @media (max-width: 480px) {
    border-radius: 0 0 30px 30px;
    border: none;
    width: 80vw;
    height: 50vh;
    align-items: center;
  }
`

const MenuSelectorBtn = styled.button`
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${(props) => (props.isSelected ? '#00abaa' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  cursor: pointer;
  height: 140px;
  width: 80px;
  font-size: 16px;
  font-family: Pretendard;
  transition:
    background-color 0.3s ease,
    background-position 0.3s ease;

  @media (max-width: 480px) {
    width: 16vw;
    margin-right: ${(props) => props.marginright}px;
    margin-bottom: 0;
    height: 30px;
  }
`

const Menu = styled.p`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  margin: 0px;
  padding: 4px;
  color: ${(props) => (props.isSpecial ? '#00AAA9' : '#000000')};
`

const menuItems = dormMenus.DormMenus

export default function MenuCardSection() {
  const [clicked, setClicked] = useState(0)

  return (
    <MenuCardContainer>
      <MenuSelector>
        <MenuSelectorBtn
          marginright={10}
          onClick={() => setClicked(0)}
          isSelected={clicked === 0}
        >
          아침
        </MenuSelectorBtn>
        <MenuSelectorBtn
          marginright={10}
          onClick={() => setClicked(1)}
          isSelected={clicked === 1}
        >
          점심
        </MenuSelectorBtn>
        <MenuSelectorBtn
          onClick={() => setClicked(2)}
          isSelected={clicked === 2}
        >
          저녁
        </MenuSelectorBtn>
      </MenuSelector>
      <MenuCard>
        {menuItems[clicked].menus.map((menu, index) => (
          <Menu key={index} isSpecial={index === 1 || index === 3}>
            {menu}
          </Menu>
        ))}
      </MenuCard>
    </MenuCardContainer>
  )
}
