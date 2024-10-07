import { css } from '@emotion/css'
import { NavLink } from 'react-router-dom'

function Header() {
  const listStyle = css`
    padding: 0;
    margin-left: 30px;
    color: #222;
  `
  const headerContainerStyle = css`
    height: 120px;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  return (
    <>
      <header className={headerContainerStyle}>
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
            <NavLink to="comment">식당후기</NavLink>
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
