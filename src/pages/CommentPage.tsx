import styled from '@emotion/styled'
import ReviewInput from '../components/ReviewInput'
import Carousel from '../components/BestReviewCarousel'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { align: 'start', loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Body = styled.div`
  margin: 0;
  padding: 0px 40px;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
`

const Divider = styled.hr`
  border: 0.8px solid #e0e0e0;
  margin-top: 0.75rem;
`

function ReviewView() {
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

const H1 = styled.h1`
  @media (max-width: 480px) {
    font-size: 25px;
  }
`

function CommentPage() {
  return (
    <Body>
      <H1>베스트 후기</H1>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <H1>전체 후기</H1>
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
