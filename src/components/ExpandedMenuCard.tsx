import styled from '@emotion/styled'
import { forwardRef, useState } from 'react'

interface Props {
  title: string
}

const ExpandedCardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`

const Card = styled.div`
  position: absolute;
  z-index: 10;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  height: 90vh;
  margin: 0 20px;
  border-radius: 20px;
  background: white;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);

  @media (max-width: 1200px) {
    width: 84vw;
    height: 84vh;
  }

  @media (max-width: 480px) {
    width: 94vw;
    height: 80vh;
  }
`

const Title = styled.p`
  position: absolute;
  font-family: BMHANNAPro;
  font-size: 100px;
  font-weight: 400;
  top: 0;
  left: 0;
  margin-top: 40px;
  margin-left: 40px;

  span {
    font-size: 20px;
    font-weight: 400;
    margin-right: 4px;
  }

  @media (max-width: 1280px) {
    font-size: 68px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`

const ReviewContainer = styled.div`
  position: absolute;
  width: 1000px;
  height: 800px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: #f4f4f4;
  right: 40px;
  bottom: 40px;

  @media (max-width: 1280px) {
    width: 498px;
    height: 780px;
  }

  @media (max-width: 480px) {
    width: 80vw;
    height: 28vh;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: 20px;
  }
`
const ReviewTitle = styled.p`
  font-family: BMHANNAPro;
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  margin-top: 20px;
  margin-left: 20px;

  span {
    font-size: 20px;
    font-weight: 400;
    margin-left: 4px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    span {
      font-size: 16px;
      font-weight: 400;
      margin-left: 4px;
    }
  }
`

const MenuContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  left: 40px;
  bottom: 40px;

  @media (max-width: 1280px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 248px;
    height: 248px;
    left: 40px;
    top: 140px;
  }
`

const Menu = styled.p<{ isActive?: boolean }>`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => (props.isActive ? '#00AAA9' : '#000000')};
  cursor: pointer;

  @media (max-width: 1280px) {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 20px;
`

const Stepper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

const Step = styled.div<{ isActive?: boolean }>`
  width: 4px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  background-color: ${(props) => (props.isActive ? '#00AAA9' : '#e0e0e0')};
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 1280px) {
    height: 48px;
  }

  @media (max-width: 480px) {
    height: 36px;
  }
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

const ExpandedMenuCard = forwardRef<HTMLDivElement, Props>(({ title }, ref) => {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <ExpandedCardContainer>
      <Card ref={ref}>
        <Title>
          <span>오늘의</span>
          {title}
        </Title>{' '}
        <ReviewContainer>
          <ReviewTitle>
            {menuItems[activeStep]}
            <span>은 어떨까?</span>
          </ReviewTitle>
        </ReviewContainer>
        <MenuContainer>
          <Stepper>
            {menuItems.map((_, index) => (
              <Step
                key={index}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              ></Step>
            ))}
          </Stepper>
          <MenuWrapper>
            {menuItems.map((menu, index) => (
              <Menu
                key={index}
                isActive={index === activeStep}
                onClick={() => setActiveStep(index)}
              >
                {menu}
              </Menu>
            ))}
          </MenuWrapper>
        </MenuContainer>
      </Card>
    </ExpandedCardContainer>
  )
})

export default ExpandedMenuCard
