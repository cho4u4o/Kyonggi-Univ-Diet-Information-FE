import styled from '@emotion/styled';

export default function MenuItem({ menu }) {
  return (
    <MenuItemWrapper>
      <MenuImage url={menu.url} />
      <MenuTitle>{menu.menu}</MenuTitle>
      <MenuTitle>{menu.price.toLocaleString()}원</MenuTitle>
    </MenuItemWrapper>
  );
}

const MenuItemWrapper = styled.div`
  background-color: transparent;
  border-radius: 15px;
  padding: 10px;
  transition:
    transform 0.3s,
    border 0.2s ease-in-out;
  height: 200px;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-bottom: 10px;
  height: 80%;
  border-radius: 10px;
`;

const MenuTitle = styled.p`
  font: 600 18px/1.5 Pretendard;
  margin: 0;
  color: white;
`;
