import styled from '@emotion/styled'
import ReviewInput from '../components/ReviewInput'
import Carousel from '../components/BestReviewCarousel'
import ReviewPagination from '../components/ReviewPagination'

const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 7
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Body = styled.div`
  margin: 0;
  padding: 0px 40px;
  overflow-x: hidden;
  width: 100vw;
  box-sizing: border-box;
`

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

      <ReviewPagination />
    </Body>
  )
}

export default CommentPage
