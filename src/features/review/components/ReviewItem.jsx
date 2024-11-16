export default function ReviewItem({ rating, comment }) {
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
}

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

const Divider = styled.hr`
  border: 0.8px solid #e0e0e0;
  margin-top: 0.75rem;
`;
