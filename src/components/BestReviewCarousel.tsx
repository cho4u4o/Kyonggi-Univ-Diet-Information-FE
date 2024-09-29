import Card from './BestReviewCard'
import styled from '@emotion/styled'

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
        <Card
          restaurant="경기드림타워"
          comment="간이 세다는 말이 있어서 걱정했는데 정말 별로입니다. 그래도 누가 사준다고 하면 가서 먹을 것 같아요. 그니까 사줘!!"
          score={4}
        />
        <Card
          restaurant="경기드림타워"
          comment="간이 세다는 말이 있어서 걱정했는데 정말 별로입니다. 그래도 누가 사준다고 하면 가서 먹을 것 같아요. 그니까 사줘!!"
          score={4}
        />
        <Card
          restaurant="경기드림타워"
          comment="간이 세다는 말이 있어서 걱정했는데 정말 별로입니다. 그래도 누가 사준다고 하면 가서 먹을 것 같아요. 그니까 사줘!!"
          score={4}
        />
        <Card
          restaurant="경기드림타워"
          comment="간이 세다는 말이 있어서 걱정했는데 정말 별로입니다. 그래도 누가 사준다고 하면 가서 먹을 것 같아요. 그니까 사줘!!"
          score={4}
        />
      </CarouselContainer>
    </>
  )
}
export default BestReviewCarousel
