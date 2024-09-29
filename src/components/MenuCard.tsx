import styled from '@emotion/styled'

interface Props {
  title: string
}

const Card = styled.div`
  position: relative;
  justify-content: flex-start;
  align-items: flex-start;
  width: 368px;
  height: 400px;
  margin: 0 20px;
  border-radius: 20px;
  background: white;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
`

const Title = styled.p`
  position: absolute;
  font-family: BMHANNAPro;
  font-size: 40px;
  font-weight: 400;
  top: 0;
  left: 0;
  margin-top: 20px;
  margin-left: 20px;
`

const Menu = styled.p<{ isSpecial?: boolean }>`
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 700;
  margin: 0px;
  color: ${(props) => (props.isSpecial ? '#00AAA9' : '#000000')};
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 20px;
`

//dummy data
const menuItems = [
  '쌀밥',
  '북어해장국',
  '돈사태김치찜',
  '오징어볼강정',
  '연두부',
  '도시락김',
  '요구르트',
]

const MenuCard = ({ title }: Props) => {
  return (
    <Card>
      <Title>{title}</Title>
      <MenuWrapper>
        {menuItems.map((menu, index) => (
          <Menu key={index} isSpecial={index === 1 || index === 3}>
            {menu}
          </Menu>
        ))}
      </MenuWrapper>
    </Card>
  )
}

export default MenuCard
