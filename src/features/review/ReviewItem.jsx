import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';
import { MdOutlineThumbUp } from 'react-icons/md';

export default function ReviewItem({ review }) {
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
          <span>
            {Array.from({ length: review.rating }).map((_, index) => (
              <FaStar size={12} key={index} />
            ))}
          </span>
          <LikeBtn>
            <MdOutlineThumbUp />
            {/* <IoMdThumbsUp /> */}
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
