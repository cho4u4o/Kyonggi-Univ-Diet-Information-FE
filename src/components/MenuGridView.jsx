import styled from '@emotion/styled'
import menuData from '../datas/menus.json'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MenuGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
`

const MenuItem = styled.div`
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  transition:
    transform 0.3s,
    border 0.2s ease-in-out;
  height: 200px;

  &:hover {
    transform: scale(1.05);
  }
`

const MenuImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-bottom: 10px;
  height: 80%;
  border-radius: 10px;
`

const menus = menuData.Menus

export default function MenuGridView() {
  return (
    <MenuContainer>
      <MenuGrid>
        {menus.map((menu, index) => (
          <MenuItem key={index}>
            <MenuImage url={menu.url} />
            {menu.menu}
          </MenuItem>
        ))}
      </MenuGrid>
    </MenuContainer>
  )
}
