import styled from '@emotion/styled'

export default function BestReviewCard({ restaurant, comment, score }) {
  const CardContainer = styled.div`
    background: linear-gradient(#f4f4f4, rgba(212, 241, 241, 0.4));
    padding: 30px;
    border-radius: 40px;
    width: 320px;
    height: 180px;
    margin: 0px 20px 0px 0px;
    @media (max-width: 480px) {
      padding: 20px;

      width: 220px;
      height: 120px;
      border-radius: 30px;
      overflow: hidden;
      align-items: center;
    }
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
    @media (max-width: 480px) {
      font-size: 12px;
    }
  `
  const Restaurant = ({ restaurant }) => (
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
    @media (max-width: 480px) {
      margin: 0;
      font-size: 13px;
    }
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
