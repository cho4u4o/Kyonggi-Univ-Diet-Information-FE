import styled from '@emotion/styled';

export const InnerContentWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const InnerContentCard = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  height: 60vh;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => (theme === 'black' ? '#444' : '#fff')};
  padding: 20px;

  @media (max-width: 480px) {
    align-items: start;
    border-radius: 15px;
    border: none;
    width: 85vw;
    height: 400px;
  }
  @media (max-width: 390px) {
    height: 370px;
  }
`;
