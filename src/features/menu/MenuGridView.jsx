import styled from '@emotion/styled';
import { menus } from '../../shared/datas';
import MenuItem from './MenuItem';

export default function MenuGridView({ id }) {
  const menuData = menus.Menus;
  return (
    <MenuContainer>
      {menuData[id] ? (
        <MenuGrid>
          {menuData[id].map((menu, index) => (
            <MenuItem key={index} menu={menu} />
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

const NoMenu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: white;
  place-items: center;
  font: 600 20px/1.5em Pretendard;
`;
