import React, { useState } from 'react'
import styled from '@emotion/styled'
import dormMenus from '../datas/dormMenus.json'
import reviews from '../datas/reviews.json'

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
  justify-content: space-between;
  align-items: center;
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
    justify-content: center;
  }
`

const MenuDiv = styled.div`
  flex-direction: column;
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
  padding-top: 8px;
  cursor: pointer;
  color: ${(props) => (props.isSpecial ? '#00AAA9' : '#000000')};
`

const menuItems = dormMenus.DormMenus
const menuReviews = reviews.DormMenuReviews

const Review = styled.p`
  font-family: Pretendard;
`

const MenuReviewDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 55vh;
  background-color: #f4f4f4;
  border-radius: 15px;
  font-family: Pretendard;
  font-size: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`

const MenuReview = ({ selectedMenu, menuReviews }) => {
  if (!selectedMenu) return <div>메뉴를 선택하고 리뷰를 확인하세요!</div>
  if (!menuReviews) return <div></div>

  const selectedReview = menuReviews.find((item) => item.id === selectedMenu)

  if (!selectedReview) return <div>리뷰를 찾을 수 없습니다.</div>

  return (
    <div>
      {selectedReview.reviews.map((review) => (
        <Review key={review.id} memberName={review.memberName}>
          {review.content}
        </Review>
      ))}
    </div>
  )
}

export default function MenuCardSection() {
  const [clicked, setClicked] = useState(0)
  const [selectedMenu, setSelectedMenu] = useState(null)

  return (
    <MenuCardContainer>
      <MenuSelector>
        {Array.from({ length: 3 }).map((_, index) => {
          const labels = ['아침', '점심', '저녁']
          return (
            <MenuSelectorBtn
              key={index}
              onClick={() => setClicked(index)}
              isSelected={clicked === index}
            >
              {labels[index]}
            </MenuSelectorBtn>
          )
        })}
      </MenuSelector>
      <MenuCard>
        <MenuDiv>
          {menuItems[clicked].menus.map((menu, index) => (
            <Menu
              key={index}
              isSpecial={index === 1 || index === 3}
              onClick={() => {
                setSelectedMenu(menu)
              }}
            >
              {menu}
            </Menu>
          ))}
        </MenuDiv>
        <MenuReviewDiv>
          <MenuReview selectedMenu={selectedMenu} menuReviews={menuReviews} />
        </MenuReviewDiv>
      </MenuCard>
    </MenuCardContainer>
  )
}
