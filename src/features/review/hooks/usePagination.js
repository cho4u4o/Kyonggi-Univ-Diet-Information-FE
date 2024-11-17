import { useState } from 'react';

export default ReviewPagination = () => {
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

  return {
    currentPage,
    currentPageData,
    currentGroupPages,
    handlePageChange,
    handleGroupChange,
    totalPages,
  };
};
