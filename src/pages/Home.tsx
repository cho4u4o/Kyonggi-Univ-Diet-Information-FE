import styled from '@emotion/styled'
import MenuCard from '../components/MenuCard'
import Header from '../components/Header'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Row = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Home = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <MenuCard title="아침"></MenuCard>
          <MenuCard title="점심"></MenuCard>
          <MenuCard title="저녁"></MenuCard>
        </Row>
      </Container>
    </>
  )
}

export default Home
