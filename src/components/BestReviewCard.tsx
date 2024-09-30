import styled from '@emotion/styled'

function BestReviewCard({
  restaurant,
  comment,
  score,
}: {
  restaurant: string
  comment: string
  score: number
}) {
  const CardContainer = styled.div`
    background: linear-gradient(#f4f4f4, rgba(212, 241, 241, 0.4));
    padding: 30px;
    border-radius: 40px;
    margin-right: 20px;
    min-width: 350px;
    height: 180px;
  `
  const Column = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    display: flex;
  `
  const Row = styled.div`
    flex-direction: row;
    justify-content: space-between;
    display: flex;
  `
  const Restaurant = ({ restaurant }: { restaurant: string }) => (
    <a>
      <u>
        <b>{restaurant}</b>
      </u>
    </a>
  )
  const ReviewContainer = styled.div`
    width: 100%;
    height: 92px;
    margin: 20px 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 1.5;
  `
  const ReviewInformation = () => (
    <>
      <span id="score">{'★'.repeat(score)}&nbsp;</span>
      <span id="review-info">
        <b>한**</b>&nbsp;&nbsp;2022.03.14
      </span>
    </>
  )
  return (
    <CardContainer>
      <Column>
        <Row>
          <Restaurant restaurant={restaurant} />
          <span>👍</span>
        </Row>
        <ReviewContainer>{comment}</ReviewContainer>
        <Row>
          <ReviewInformation />
        </Row>
      </Column>
    </CardContainer>
  )
}

export default BestReviewCard
