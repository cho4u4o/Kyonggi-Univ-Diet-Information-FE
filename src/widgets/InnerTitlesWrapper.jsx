import React from 'react';
import styled from '@emotion/styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSelectedDormMenuStore } from '../shared';

export default function InnerTitlesWrapper({ logo, title, subtitle, theme }) {
  const {
    setSelectedDateAfter,
    setSelectedDateBefore,
    useTodayDate,
    selectedDate,
  } = useSelectedDormMenuStore();

  return (
    <ContentHeader>
      <TitleContainer>
        <Logo src={logo} />
        <TitleWrapper theme={theme}>
          <Title>{title}</Title>
          <Subtitle>
            <DateButton
              theme={theme}
              disabled={useTodayDate('weekday', selectedDate) === 'MONDAY'}
              onClick={() => setSelectedDateBefore()}
            >
              <IoIosArrowBack size={14} />
            </DateButton>
            {subtitle}
            <DateButton
              theme={theme}
              onClick={() => setSelectedDateAfter()}
              disabled={useTodayDate('weekday', selectedDate) === 'SUNDAY'}
            >
              <IoIosArrowForward size={14} />
            </DateButton>
          </Subtitle>
        </TitleWrapper>
      </TitleContainer>
    </ContentHeader>
  );
}

const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  @media (max-width: 480px) {
    width: fit-content;
  }
`;

const DateButton = styled.button`
  width: fit-content;
  height: 30px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  place-items: center;
  display: ${({ theme }) => (theme === 'black' ? 'flex' : 'none')};
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  width: 100%;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const Logo = styled.img`
  margin: 0;
  border: none;
  width: 138px;
  height: 138px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding-top: 14px;
  color: ${({ theme }) => (theme === 'black' ? '#333' : '#fff')};

  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;
    padding-top: 20px;
  }
`;

const Title = styled.p`
  font: 700 40px Pretendard;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 22px;
    width: 250px;
  }
`;

const Subtitle = styled.div`
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  margin-top: 4px;
  @media (max-width: 480px) {
    font-size: 15px;
    width: 250px;
    padding: 0;
    margin-bottom: 20px;
  }
`;
