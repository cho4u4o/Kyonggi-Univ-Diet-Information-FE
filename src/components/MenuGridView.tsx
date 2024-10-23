import styled from '@emotion/styled'

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
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`

const menus = [
  '메뉴 1',
  '메뉴 2',
  '메뉴 3',
  '메뉴 4',
  '메뉴 5',
  '메뉴 6',
  '메뉴 7',
  '메뉴 8',
  '메뉴 9',
]

export default function MenuGridView() {
  return (
    <MenuContainer>
      <MenuGrid>
        {menus.map((menu, index) => (
          <MenuItem key={index}>{menu}</MenuItem>
        ))}
      </MenuGrid>
    </MenuContainer>
  )
}
