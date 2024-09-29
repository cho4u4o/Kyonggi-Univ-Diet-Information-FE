import { css } from '@emotion/css'

function Header() {
  const listStyle = css`
    padding: 0;
    margin-left: 30px;
    color: #222;
  `
  return (
    <>
      <header
        className={css`
          height: 120px;
          padding: 0px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          className={css`
            display: flex;
            align-items: flex-end;
          `}
        >
          <b
            className={css`
              font-size: 40px;
              margin: 0;
            `}
          >
            기밥
          </b>
          <span
            className={css`
              font-size: 20px;
              margin: 5px 10px;
            `}
          >
            {' '}
            기룡아 밥먹자
          </span>
        </div>
        <div className="menu-bar">
          <ul
            className={css`
              display: flex;
              flex-wrap: wrap;
              padding: 0;
              margin: 0;
              list-style: none;
            `}
          >
            <li className={listStyle}>
              <a href="https://www.naver.com">식단후기</a>
            </li>
            <li className={listStyle}>
              <a>교내식당</a>
            </li>
            <li className={listStyle}>
              <a>개발자들</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header
