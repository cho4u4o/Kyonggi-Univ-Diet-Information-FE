import styled from '@emotion/styled';
import React, { useState } from 'react';
import reviewsData from '../datas/reviews.json';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { PAGE_OPTIONS } from './PaginationSettings';

const Datas = reviewsData.Datas;

const Divider = styled.hr`
  border: 0.8px solid #e0e0e0;
  margin-top: 0.75rem;
`;

const ReviewItem = ({ rating, comment }) => {
  const ReviewContainer = styled.div`
    height: 60px;
    padding: 10px 10px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr;
  `;
  const ReviewDate = styled.span`
    font-family: 'Pretendard';
    font-size: 10px;
    grid-column: 1;
    grid-row: 2;
  `;
  const ReviewWriter = styled.span`
    font-family: 'Pretendard';
    grid-column: 1;
    grid-row: 1;
  `;
  const ReviewContent = styled.span`
    font-family: 'Pretendard';
    font-weight: light;
    grid-column: 2;
    grid-row: span 2 / span 2;
  `;
  const ReviewStar = styled.span`
    grid-column: 3;
    grid-row: span 2 / span 2;
    display: flex;
    justify-content: flex-end;
  `;

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
  );
};

const ReviewPagination = () => {
  // page 관련 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * PAGE_OPTIONS.ITEMS_PER_PAGE;
  const currentPageData = Datas.slice(
    startIndex,
    startIndex + PAGE_OPTIONS.ITEMS_PER_PAGE,
  );
  const totalPages = Math.ceil(Datas.length / PAGE_OPTIONS.ITEMS_PER_PAGE);

  // page button group 관련 페이지네이션
  const [currentGroup, setCurrentGroup] = useState(1);
  const startGroup = (currentGroup - 1) * PAGE_OPTIONS.PAGES_PER_GROUP;
  const currentGroupPages = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  ).slice(startGroup, startGroup + PAGE_OPTIONS.PAGES_PER_GROUP);
  const totalGroup = Math.ceil(totalPages / PAGE_OPTIONS.PAGES_PER_GROUP);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGroupChange = (direction) => {
    if (direction === 'next' && currentGroup < totalGroup) {
      setCurrentGroup(currentGroup + 1);
      setCurrentPage(currentGroup * PAGE_OPTIONS.PAGES_PER_GROUP + 1);
    } else if (direction === 'prev' && currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
      setCurrentPage((currentGroup - 2) * PAGE_OPTIONS.PAGES_PER_GROUP + 1);
    }
  };

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  `;

  const PaginationButton = styled.button`
    padding: 0.75rem;
    margin: 0 0.25rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
    align-items: center;
    &:hover {
      color: #00abaa;
    }
    ${(props) => props.isActive && `color: #00abaa;`}
  `;

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
        {totalPages > PAGE_OPTIONS.PAGES_PER_GROUP &&
          currentPage > PAGE_OPTIONS.PAGES_PER_GROUP && (
            <PaginationButton onClick={() => handleGroupChange('prev')}>
              <FaCaretLeft size={16} />
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
        {totalPages > PAGE_OPTIONS.PAGES_PER_GROUP &&
          currentGroupPages.length >= PAGE_OPTIONS.PAGES_PER_GROUP && (
            <PaginationButton onClick={() => handleGroupChange('next')}>
              <FaCaretRight size={16} />
            </PaginationButton>
          )}
      </ButtonWrapper>
    </>
  );
};

export default ReviewPagination;
