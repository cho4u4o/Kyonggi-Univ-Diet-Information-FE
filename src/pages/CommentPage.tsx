import BestReviewCarousel from '../components/BestReviewCarousel'
import { css } from '@emotion/css'

function CommentPage() {
  return (
    <div
      id="body"
      className={css`
        padding: 10px 40px;
      `}
    >
      <div id="best-reviews">
        <div className="content-header">
          <h1>베스트 후기</h1>
        </div>
        <BestReviewCarousel />
      </div>
      <div
        id="best-reviews-indicator"
        className={css`
          height: 30px;
        `}
      ></div>
      <div id="whole-reviews">
        <div className="content-header">
          <h1>전체 후기</h1>
        </div>
        <p className="review-sorter">
          리뷰 <b>4</b>개 | 최신순
        </p>
        <hr
          className={css`
            border: 0.8px solid #e0e0e0;
            margin-top: 10px;
          `}
        />
      </div>
    </div>
  )
}

export default CommentPage
