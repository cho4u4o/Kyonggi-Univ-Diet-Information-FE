import styled from '@emotion/styled';
import menuData from '../datas/menus.json';

export default function MenuGridView({ id }) {
  const menus = menuData.Menus;
  return (
    <MenuContainer>
      {menus[id] ? (
        <MenuGrid>
          {menus[id]['쌀국수'].map((menu, index) => (
            <MenuItem key={index}>
              <MenuImage url={menu.url} />
              <MenuTitle>{menu.menu}</MenuTitle>
              <MenuTitle>{menu.price.toLocaleString()}원</MenuTitle>
            </MenuItem>
          ))}
        </MenuGrid>
      ) : (
        <NoMenu>
          <p>메뉴가 없습니다.</p>
        </NoMenu>
      )}
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const MenuGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`;

const MenuItem = styled.div`
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

const NoMenu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: white;
  place-items: center;
  font: 600 20px/1.5em Pretendard;
`;
