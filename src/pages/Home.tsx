import styled from '@emotion/styled'
import Header from '../components/Header'
import rice from '../assets/rice.svg'
import kiryong from '../assets/kiryong-notice.svg'
import MenuCardWrapper from '../components/MenuCardWrapper'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const TodayTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  width: 1248px;

  @media (max-width: 480px) {
    display: none;
  }
`

const Logo = styled.img`
  margin: 0;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 338px;
  margin: 0;
`

const Title = styled.p`
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
`

const Subtitle = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`

const FloatingCircle = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);

  @media (max-width: 480px) {
    display: none;
  }
`
const Home = () => {
  return (
    <>
      <Content>
        <TodayTitleContainer>
          <Logo src={rice}></Logo>
          <TitleWrapper>
            <Title>오늘의 드림타워 식단</Title>
            <Subtitle>2024년 08월 24일 수요일</Subtitle>
          </TitleWrapper>
        </TodayTitleContainer>
        <MenuCardWrapper></MenuCardWrapper>
        <FloatingCircle>
          <Logo src={kiryong}></Logo>
        </FloatingCircle>
      </Content>
    </>
  )
}

export default Home
