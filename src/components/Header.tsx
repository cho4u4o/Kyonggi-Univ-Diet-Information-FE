import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

function Header() {
  const Header = styled.header`
    height: 120px;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
  const Logo = styled(NavLink)`
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #222;
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
    color: black;
    text-decoration: none;
    margin-left: 10px;

    &.active {
      color: #00abaa;
    }

    &:hover {
      color: #00abaa;
    }
  `
  return (
    <>
      <Header>
        <div>
          <Logo to="/">기밥</Logo>
          <SmallLogo>기룡아 밥먹자</SmallLogo>
        </div>

        <MenuBar>
          <StyledNavLink to="comment">식당후기</StyledNavLink>
          <StyledNavLink to="abc">교내식당</StyledNavLink>
          <StyledNavLink to="abc">개발자들</StyledNavLink>
        </MenuBar>
      </Header>
    </>
  )
}

export default Header
