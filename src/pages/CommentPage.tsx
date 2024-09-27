import BestReviewCarousel from '../components/BestReviewCarousel'

function CommentPage() {
  return (
    <div id="body">
      <div id="best-reviews">
        <div className="content-header">
          <h2>베스트 후기</h2>
        </div>
        <BestReviewCarousel />
      </div>
      <div id="best-reviews-indicator"></div>
      <div id="whole-reviews">
        <div className="content-header">
          <h2>전체 후기</h2>
        </div>
        <p className="review-sorter">
          리뷰 <b>4</b>개 | 최신순
        </p>
        <hr className="line-divider" />
      </div>
    </div>
  )
}

export default CommentPage
