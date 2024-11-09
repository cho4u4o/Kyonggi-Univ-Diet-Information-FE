import Styled from '@emotion/styled'
import Input from '../components/Input'
import MenuGridView from '../components/MenuGridView'
import ReviewPagination from '../components/ReviewPagination'

const InnerRestaurant = Styled.div`
    align-items: center;
    display: flex;
    padding: 32px;
    box-sizing: border-box;
    overflow-x: scroll;
    overflow-y: hidden;
  `

const InnerRestaurantMenuTitle = Styled.span`
    font-weight: 600;
    font-size: 15px;
    margin-right: 20px;
  `

const InnerRestaurantButton = Styled.button`
    padding: 10px 20px;
    background-color: #fff;
    border: none;
    border-radius: 30px;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    margin-right: 10px;
    box-shadow: 0 10px 10px 0 RGBA(0, 0, 0, 0.01);
    transition: background-color 0.3s ease-in-out, color 0.2s ease-in-out;
  
    &:hover {
     background-color: #00abaa;
     color: #fff;
     }
  `

const InformationSection = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  padding: 0 32px;

  @media screen and (max-width: 480px) {
    display: flex;
  }
`

const CommentSection = Styled.div`
  grid-column: 1;
    grid-row: 1;`

const MenuSection = Styled.div`
  grid-column: 2;
    grid-row: 1;`

export default function RestaurantDetailPage() {
  return (
    <>
      <InnerRestaurant>
        <InnerRestaurantMenuTitle>내부 식당</InnerRestaurantMenuTitle>
        <InnerRestaurantButton>옥미관</InnerRestaurantButton>
        <InnerRestaurantButton>만권화밥</InnerRestaurantButton>
        <InnerRestaurantButton>향차이</InnerRestaurantButton>
      </InnerRestaurant>
      <InformationSection>
        <CommentSection>
          <h2>리뷰 보기</h2>
          <Input />
          <ReviewPagination></ReviewPagination>
        </CommentSection>
        <MenuSection>
          <h2>메뉴 보기</h2>
          <MenuGridView />
        </MenuSection>
      </InformationSection>
    </>
  )
}
