import styled from '@emotion/styled'
import MenuCard from '../components/MenuCard'
import Header from '../components/Header'
import rice from '../assets/rice.svg'
import kiryong from '../assets/kiryong_notice.svg'
import {
  HiOutlineArrowRightCircle,
  HiOutlineArrowLeftCircle,
} from 'react-icons/hi2'

const Content = styled.div``

const TodayTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: 100vw;
`

const Logo = styled.img``

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

const MenuWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuCardWarpper = styled.div`
  width: 1148px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 28px;
`

const ButtonContainer = styled.div`
  width: 1148px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 20px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
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
`
const Home = () => {
  return (
    <>
      <Header></Header>
      <Content>
        <TodayTitle>
          <Logo src={rice}></Logo>
          <TitleWrapper>
            <Title>오늘의 드림타워 식단</Title>
            <Subtitle>2024년 08월 24일 수요일</Subtitle>
          </TitleWrapper>
        </TodayTitle>
        <MenuWrapper>
          <MenuCardWarpper>
            <MenuCard title="아침"></MenuCard>
            <MenuCard title="점심"></MenuCard>
            <MenuCard title="저녁"></MenuCard>
          </MenuCardWarpper>
          <ButtonContainer>
            <ButtonWrapper>
              <Button>
                <HiOutlineArrowLeftCircle size={48}></HiOutlineArrowLeftCircle>
              </Button>
              <Button>
                <HiOutlineArrowRightCircle
                  size={48}
                ></HiOutlineArrowRightCircle>
              </Button>
            </ButtonWrapper>
          </ButtonContainer>
        </MenuWrapper>
        <FloatingCircle>
          <Logo src={kiryong}></Logo>
        </FloatingCircle>
      </Content>
    </>
  )
}

export default Home
