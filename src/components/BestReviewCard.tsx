import { css } from '@emotion/css'

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
    <div
      id="card"
      className={css`
        background: linear-gradient(#f4f4f4, rgba(212, 241, 241, 0.4));
        padding: 30px;
        border-radius: 40px;
        margin-right: 20px;
        min-width: 350px;
        height: 180px;
      `}
    >
      <div
        className={css`
          flex-direction: column;
          justify-content: flex-start;
          display: flex;
        `}
      >
        <div
          id="review-title"
          className={css`
            flex-direction: row;
            justify-content: space-between;
            display: flex;
          `}
        >
          <a>
            <u>
              <b>{restaurant}</b>
            </u>
          </a>
          <span>따봉버튼</span>
        </div>
        <div
          id="review-box"
          className={css`
            width: 100%;
            height: 92px;
            margin: 20px 0;
            overflow: hidden;
            display: flex;
            align-items: center;
          `}
        >
          <p
            id="review"
            className={css`
              font-size: 18px;
              line-height: 1.5;
            `}
          >
            {comment}
          </p>
        </div>
        <div
          id="review-footer"
          className={css`
            flex-direction: row;
            justify-content: space-between;
            display: flex;
          `}
        >
          <span id="score">{'★'.repeat(score)}&nbsp;</span>
          <span id="review-info">
            <b>한**</b>&nbsp;&nbsp;2022.03.14
          </span>
        </div>
      </div>
    </div>
  )
}

export default BestReviewCard
