function BestReviewCard({
  restaurant,
  comment,
  score,
}: {
  restaurant: string
  comment: string
  score: number
}) {
  return (
    <div id="card">
      <div className="in-card-column">
        <div className="in-card-row" id="review-title">
          <a>
            <u>
              <b>{restaurant}</b>
            </u>
          </a>
          <span>따봉버튼</span>
        </div>
        <div id="review-box">
          <p id="review">{comment}</p>
        </div>
        <div className="in-card-row" id="review-footer">
          <span id="score">
            {'★'.repeat(score)}&nbsp;{score}
          </span>
          <span id="review-info">
            <b>한**</b>&nbsp;&nbsp;2022.03.14
          </span>
        </div>
      </div>
    </div>
  )
}

export default BestReviewCard
