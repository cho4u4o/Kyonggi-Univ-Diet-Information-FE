import styled from '@emotion/styled'
import rice from '../assets/rice.svg'
import kiryong from '../assets/kiryong-notice.svg'
import MenuCardSection from '../components/MenuCardSection'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  margin: 0;
  background-color: #f4f4f4;

  @media (max-width: 480px) {
    flex-direction: column;
    height: calc(100vh - 70px);
  }
`

const TodayTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  width: calc(80vw + 100px);
  @media (max-width: 480px) {
    justify-content: center;
  }
`

const Logo = styled.img`
  margin: 0;
  @media (max-width: 480px) {
    display: none;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding-top: 14px;

  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;
    padding-top: 20px;
  }
`

const Title = styled.p`
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 22px;
    width: 250px;
  }
`

const Subtitle = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  margin-top: 4px;
  @media (max-width: 480px) {
    font-size: 15px;
    width: 250px;
    padding: 0;
    margin-bottom: 20px;
  }
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
export default function Home() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const week = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
  return (
    <>
      <Content>
        <TodayTitleContainer>
          <Logo src={rice}></Logo>
          <TitleWrapper>
            <Title>오늘의 드림타워 식단</Title>
            <Subtitle>{`${year}년 ${month}월 ${day}일 ${week}요일`}</Subtitle>
          </TitleWrapper>
        </TodayTitleContainer>
        <MenuCardSection />
        <FloatingCircle>
          <Logo src={kiryong}></Logo>
        </FloatingCircle>
      </Content>
    </>
  )
}
