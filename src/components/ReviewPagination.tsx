import styled from '@emotion/styled'
import React, { useState } from 'react'

const Datas = [
  {
    id: 1,
    rating: 5,
    content: 'Amazing food and great service. Will definitely come back!',
  },
  {
    id: 2,
    rating: 4,
    content:
      'The ambiance was perfect, and the food was delicious, but a bit pricey.',
  },
  {
    id: 3,
    rating: 3,
    content:
      'Decent meal, but nothing extraordinary. The service was a bit slow.',
  },
  {
    id: 4,
    rating: 5,
    content:
      'Best restaurant in town! The dishes were flavorful, and the staff was friendly.',
  },
  {
    id: 5,
    rating: 2,
    content:
      'The food was cold, and the portion sizes were small. Not worth the price.',
  },
  {
    id: 6,
    rating: 4,
    content: 'Great location and nice food. The dessert was especially good.',
  },
  {
    id: 7,
    rating: 3,
    content: 'The experience was okay, but there are better options nearby.',
  },
  {
    id: 8,
    rating: 5,
    content:
      'Incredible experience! Every dish was well-prepared and tasted fantastic.',
  },
  {
    id: 9,
    rating: 1,
    content:
      'Terrible experience. The food was undercooked, and the service was rude.',
  },
  {
    id: 10,
    rating: 4,
    content:
      'Nice variety on the menu and reasonable prices. Will visit again soon.',
  },
  {
    id: 11,
    rating: 2,
    content: 'The restaurant was overcrowded, and the wait time was too long.',
  },
  {
    id: 12,
    rating: 5,
    content:
      'Absolutely loved it! The flavors were spot on, and the service was top-notch.',
  },
]

const Divider = styled.hr`
  border: 0.8px solid #e0e0e0;
  margin-top: 0.75rem;
`

interface ReviewItemProps {
  rating: number
  comment: string
}

const ReviewItem: React.FC<ReviewItemProps> = ({ rating, comment }) => {
  const ReviewContainer = styled.div`
    height: 60px;
    padding: 10px 10px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr;
  `
  const ReviewDate = styled.span`
    font-family: 'Pretendard';
    font-size: 10px;
    grid-column: 1;
    grid-row: 2;
  `
  const ReviewWriter = styled.span`
    font-family: 'Pretendard';
    grid-column: 1;
    grid-row: 1;
  `
  const ReviewContent = styled.span`
    font-family: 'Pretendard';
    font-weight: light;
    grid-column: 2;
    grid-row: span 2 / span 2;
  `
  const ReviewStar = styled.span`
    grid-column: 3;
    grid-row: span 2 / span 2;
    display: flex;
    justify-content: flex-end;
  `

  return (
    <>
      <ReviewContainer>
        <ReviewDate>2024.09.09</ReviewDate>
        <ReviewWriter>정**</ReviewWriter>
        <ReviewContent>{comment}</ReviewContent>
        <ReviewStar>{'★'.repeat(rating)}</ReviewStar>
      </ReviewContainer>
      <Divider />
    </>
  )
}

const itemsPerPage = 5

const ReviewPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPageData = Datas.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(Datas.length / itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  `

  const PaginationButton = styled.button<{ isActive: boolean }>`
    padding: 0.75rem;
    margin: 0 0.25rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
    &:hover {
      color: #00abaa;
    }
    ${(props) => props.isActive && `color: #00abaa;`}
  `

  return (
    <>
      <p>
        리뷰 <b>{Datas.length}</b>개 | 최신순
      </p>
      <Divider />
      <div>
        {currentPageData.map((data) => (
          <ReviewItem
            key={data.id}
            comment={data.content}
            rating={data.rating}
          />
        ))}
      </div>

      <ButtonWrapper>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            isActive={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </ButtonWrapper>
    </>
  )
}

export default ReviewPagination
