import styled from '@emotion/styled';
import { MdOutlineMenuBook } from 'react-icons/md';
import { reviews, useSelectedDormMenuStore } from '../../shared';
import ReviewItem from './ReviewItem';
import { ReviewInput } from '.';

export default function ReviewScrollView() {
  const { selectedMenu } = useSelectedDormMenuStore();
  const menuReviews = reviews.DormMenuReviews;
  const selectedReview = menuReviews.find((item) => item.id === selectedMenu);

  const renderReviewContent = () => {
    if (!selectedMenu)
      return (
        <Unselected>
          <MdOutlineMenuBook size={35} />
          메뉴를 선택하고 리뷰를 확인하세요!
        </Unselected>
      );

    if (!menuReviews) {
      return <div></div>;
    }

    return (
      <>
        <ReviewTitle>
          <b>{selectedMenu}</b>, 어떨까?
        </ReviewTitle>
        <ReviewInput />
        {!selectedReview ? (
          <ReviewContainer style={{ display: 'grid', placeItems: 'center' }}>
            리뷰가 없습니다. 첫 리뷰를 남겨주세요!
          </ReviewContainer>
        ) : (
          <ReviewContainer>
            {selectedReview.reviews.map((review, index) => {
              return <ReviewItem key={index} review={review} />;
            })}
          </ReviewContainer>
        )}
      </>
    );
  };
  return <MenuReviewDiv>{renderReviewContent()}</MenuReviewDiv>;
}

const ReviewContainer = styled.div`
  overflow: scroll;
  height: 100%;
`;

const MenuReviewDiv = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  flex-direction: column;
  width: 50vw;
  height: 100%;
  background-color: #f4f4f4;
  border-radius: 15px;
  font-family: Pretendard;
  font-size: 20px;
  gap: 10px;
  @media (max-width: 480px) {
    display: none;
  }
`;

const ReviewTitle = styled.p`
  font-size: 25px;
  margin: 0;
`;

const Unselected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  line-height: 3em;
`;
