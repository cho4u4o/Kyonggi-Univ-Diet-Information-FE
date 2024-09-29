import styled from '@emotion/styled'

const Card = styled.div`
  width: 370px;
  height: 400px;
  border-radius: 20px;
  background: white;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
`

const Text = styled.p``

const MenuCard = () => {
  return (
    <Card>
      <Text>아침</Text>
    </Card>
  )
}

export default MenuCard
