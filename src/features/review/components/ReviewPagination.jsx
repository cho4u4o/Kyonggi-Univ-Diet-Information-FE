import React from 'react';
import styled from '@emotion/styled';
import { usePagination } from '../hooks/usePagination';
import ReviewItem from './ReviewItem';
import PaginationControls from './PaginationControls';
import reviewsData from '../datas/reviews.json';
import { PAGE_OPTIONS } from '../constants/PaginationSettings';

const Datas = reviewsData.Datas;

export default function ReviewPagination() {
  return (
    <>
      <p>
        리뷰 <b>{Datas.length}</b>개 | 최신순
      </p>
      <Divider />
      {currentPageData.map((data) => (
        <ReviewItem key={data.id} comment={data.content} rating={data.rating} />
      ))}
    </>
  );
}
