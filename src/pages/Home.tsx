import styled from '@emotion/styled'
import MenuCard from '../components/MenuCard'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Row = styled.div``

const Home = () => {
  return (
    <Container>
      <Row>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
        <MenuCard></MenuCard>
      </Row>
    </Container>
  )
}

export default Home
