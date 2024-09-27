import Card from './BestReviewCard'

function BestReviewCarousel() {
  return (
    <div className="card-container">
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
    </div>
  )
}
export default BestReviewCarousel
