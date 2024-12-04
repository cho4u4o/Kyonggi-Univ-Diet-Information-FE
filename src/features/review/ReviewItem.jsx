import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';
import { MdOutlineThumbUp } from 'react-icons/md';
import { axios, requests } from '../../shared';
import { useState, useEffect } from 'react';

export default function ReviewItem({ review }) {
  const [favCount, setFavCount] = useState(0);
  const [fav, setFav] = useState(false);

  async function fetchFavCnt() {
    const cnt = await axios.get(requests.fetchReviewFav + review.id);
    if (cnt > 0) {
      setFavCount(cnt.data.result);
    }
  }

  async function toggleFavorite() {
    if (!fav) {
      await axios.post(
        requests.toggleReviewFav + review.id + '/create-favorite',
      );
      setFav(true);
    } else {
      axios.delete(requests.toggleReviewFav + 'delete/' + review.id);
      setFav(false);
    }
  }

  useEffect(() => {
    fetchFavCnt();
  }, [favCount]);

  return (
    <Review>
      <ReviewInfo>
        <span>
          {review.memberName}{' '}
          <span style={{ fontSize: '12px', fontWeight: 500 }}>
            {review.createdAt}
          </span>
        </span>
        <span>
          <span
            style={{ fontSize: '12px', fontWeight: 500, paddingBottom: '5px' }}
          >
            {favCount}
          </span>
          <LikeBtn onClick={() => toggleFavorite()}>
            {fav ? <IoMdThumbsUp size={15} /> : <MdOutlineThumbUp size={15} />}
          </LikeBtn>
        </span>
      </ReviewInfo>
      {review.content}
    </Review>
  );
}

const Review = styled.div`
  box-sizing: border-box;
  padding: 12px;
  margin: 0px;
  font-family: Pretendard;
  font-size: 15px;
  line-height: 1.5em;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 8px;
`;
const ReviewInfo = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 0px;
  padding-bottom: 4px;
  cursor: pointer;
  color: #000;
  display: flex;
  justify-content: space-between;
`;

const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 4px;
`;
