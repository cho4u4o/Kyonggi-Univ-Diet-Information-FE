import React from 'react';
import { PAGE_OPTIONS } from '../constants/PaginationSettings';

export default function ReviewPaginationButton() {
  return (
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
  );
}

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
