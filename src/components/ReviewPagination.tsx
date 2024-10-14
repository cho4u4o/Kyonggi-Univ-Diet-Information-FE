import styled from '@emotion/styled'
import React, { useState } from 'react'
import reviewsData from '../datas/reviews.json'

const Datas = reviewsData.Datas

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
const pagesPerGroup = 10

const ReviewPagination: React.FC = () => {
  // page 관련 페이지네이션
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentPageData = Datas.slice(startIndex, startIndex + itemsPerPage)
  const totalPages = Math.ceil(Datas.length / itemsPerPage)

  // page button group 관련 페이지네이션
  const [currentGroup, setCurrentGroup] = useState(1)
  const startGroup = (currentGroup - 1) * pagesPerGroup
  const currentGroupPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).slice(startGroup, startGroup + pagesPerGroup)
  const totalGroup = Math.ceil(totalPages / pagesPerGroup)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleGroupChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentGroup < totalGroup) {
      setCurrentGroup(currentGroup + 1)
      setCurrentPage(currentGroup * pagesPerGroup + 1)
    } else if (direction === 'prev' && currentGroup > 1) {
      setCurrentGroup(currentGroup - 1)
      setCurrentPage((currentGroup - 2) * pagesPerGroup + 1)
    }
  }

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  `

  const PaginationButton = styled.button<{ isActive?: boolean }>`
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
        {totalPages > pagesPerGroup && currentPage > pagesPerGroup && (
          <PaginationButton onClick={() => handleGroupChange('prev')}>
            이전
          </PaginationButton>
        )}
        {currentGroupPages.map((page) => (
          <PaginationButton
            key={page}
            isActive={currentPage === page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationButton>
        ))}
        {totalPages > pagesPerGroup &&
          currentGroupPages.length > pagesPerGroup && (
            <PaginationButton onClick={() => handleGroupChange('next')}>
              다음
            </PaginationButton>
          )}
      </ButtonWrapper>
    </>
  )
}

export default ReviewPagination
