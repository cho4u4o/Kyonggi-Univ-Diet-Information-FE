import styled from '@emotion/styled'
import MenuCard from './MenuCard'
import ExpandedMenuCard from './ExpandedMenuCard'
import {
  HiOutlineArrowLeftCircle,
  HiOutlineArrowRightCircle,
} from 'react-icons/hi2'
import { useExpandedCardStore } from '../stores/useExpandedCardStore'
import { useEffect, useRef } from 'react'

const MenuWrapper = styled.div`
  width: 1148px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MenuCardWarpper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 28px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 1188px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
`
const MenuCardWrapper = () => {
  const { expandedCard, setExpandedCard, closeExpandedCard } =
    useExpandedCardStore()

  const handleCardClick = (title: string) => {
    setExpandedCard(expandedCard === title ? null : title)
  }

  const expandedCardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: { target: any }) => {
      if (
        expandedCardRef.current &&
        !expandedCardRef.current.contains(e.target)
      ) {
        closeExpandedCard()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <MenuWrapper>
      <MenuCardWarpper>
        {expandedCard === '아침' ? (
          <>
            <ExpandedMenuCard title="아침" ref={expandedCardRef} />
            <MenuCard title="아침" onClick={() => handleCardClick('아침')} />
          </>
        ) : (
          <MenuCard title="아침" onClick={() => handleCardClick('아침')} />
        )}
        {expandedCard === '점심' ? (
          <>
            <ExpandedMenuCard title="점심" ref={expandedCardRef} />
            <MenuCard title="점심" onClick={() => handleCardClick('점심')} />
          </>
        ) : (
          <MenuCard title="점심" onClick={() => handleCardClick('점심')} />
        )}
        {expandedCard === '저녁' ? (
          <>
            <ExpandedMenuCard title="저녁" ref={expandedCardRef} />
            <MenuCard title="저녁" onClick={() => handleCardClick('저녁')} />
          </>
        ) : (
          <MenuCard title="저녁" onClick={() => handleCardClick('저녁')} />
        )}
      </MenuCardWarpper>
      <ButtonContainer>
        <Button>
          <HiOutlineArrowLeftCircle size={48}></HiOutlineArrowLeftCircle>
        </Button>
        <Button>
          <HiOutlineArrowRightCircle size={48}></HiOutlineArrowRightCircle>
        </Button>
      </ButtonContainer>
    </MenuWrapper>
  )
}

export default MenuCardWrapper
