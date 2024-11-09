import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Header() {
  const location = useLocation()

  const getBgColor = () => {
    if (location.pathname === '/restaurant') return '#333'
  }

  const getTxtColor = () => {
    if (location.pathname === '/restaurant') return '#fff'
    else return '#000'
  }

  const Header = styled.header`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.txtColor};
    height: 100px;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 480px) {
      height: 70px;
    }
  `
  const Logo = styled(NavLink)`
    color: ${(props) => props.txtColor};
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    @media (max-width: 480px) {
      font-size: 25px;
    }
  `
  const SmallLogo = styled.span`
    margin-left: 10px;
    @media (max-width: 480px) {
      display: none;
    }
  `
  const MenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
  `
  const StyledNavLink = styled(NavLink)`
    color: ${(props) => props.txtColor};

    text-decoration: none;
    margin-left: 30px;

    &.active {
      color: #00abaa;
    }

    &:hover {
      color: #00abaa;
    }

    @media (max-width: 480px) {
      margin-left: 10px;
    }
  `
  return (
    <>
      <Header bgColor={getBgColor()} txtColor={getTxtColor()}>
        <div>
          <Logo txtColor={getTxtColor()} to="/">
            기밥
          </Logo>
          <SmallLogo>기룡아 밥먹자</SmallLogo>
        </div>

        <MenuBar>
          <StyledNavLink txtColor={getTxtColor()} to="comment">
            식당후기
          </StyledNavLink>
          <StyledNavLink txtColor={getTxtColor()} to="restaurant">
            교내식당
          </StyledNavLink>
          <StyledNavLink txtColor={getTxtColor()} to="abc">
            개발자들
          </StyledNavLink>
        </MenuBar>
      </Header>
    </>
  )
}

export default Header
