import React from 'react';
import styled from '@emotion/styled';

export default function InnerTitlesWrapper({ logo, title, subtitle, theme }) {
  return (
    <ContentHeader>
      <Logo src={logo} />
      <TitleWrapper theme={theme}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
    </ContentHeader>
  );
}

const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 0;
  width: calc(80vw + 100px);
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
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 22px;
    width: 250px;
  }
`;

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
`;
