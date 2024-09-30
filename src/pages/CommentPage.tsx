import Card from '../components/BestReviewCard'
import styled from '@emotion/styled'
import ReviewInput from '../components/ReviewInput'

function CommentPage() {
  const Body = styled.div`
    padding: 10px 80px;
    padding-bottom: 100px;
  `
  function BestReviewCarousel() {
    const CarouselContainer = styled.div`
      overflow-x: scroll;
      overflow-y: hidden;
      display: flex;
      margin-bottom: 80px;
      padding: 20px 0px;
      ::-webkit-scrollbar {
        display: none;
      }
    `
    return (
      <>
        <h1>베스트 후기</h1>
        <CarouselContainer>
          {Array.from({ length: 4 }).map((_, i) => (
            <Card
              score={i + 1}
              restaurant="경기드림타워"
              comment="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              key={i}
            />
          ))}
        </CarouselContainer>
      </>
    )
  }
  const Divider = styled.hr`
    border: 0.8px solid #e0e0e0;
    margin-top: 0.75rem;
  `
  const ReviewContainer = styled.div`
    height: 60px;
    padding: 10px 20px;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr;
  `
  const ReviewDate = styled.span`
    grid-column: 1;
    grid-row: 1;
  `
  const ReviewWriter = styled.span`
    grid-column: 1;
    grid-row: 2;
  `
  const ReviewContent = styled.span`
    grid-column: 2;
    grid-row: span 2 / span 2;
  `
  const ReviewStar = styled.span`
    grid-column: 3;
    grid-row: span 2 / span 2;
    display: flex;
    justify-content: flex-end;
  `
  function ReviewView() {
    const Review = ({
      score,
      name,
      comment,
    }: {
      score: number
      name: string
      comment: string
    }) => (
      <>
        <ReviewContainer>
          <ReviewDate>2024-09-09</ReviewDate>
          <ReviewWriter>{name}**</ReviewWriter>
          <ReviewContent>{comment}</ReviewContent>
          <ReviewStar>{'★'.repeat(score + 1)}</ReviewStar>
        </ReviewContainer>
        <Divider />
      </>
    )
    return (
      <>
        {Array.from({ length: 4 }).map((_, i) => (
          <Review
            score={i}
            name="한"
            comment="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            key={i}
          />
        ))}
      </>
    )
  }

  return (
    <Body>
      <BestReviewCarousel />
      <ReviewInput />
      <p>
        리뷰 <b>4</b>개 | 최신순
      </p>
      <Divider />
      <ReviewView />
    </Body>
  )
}

export default CommentPage
