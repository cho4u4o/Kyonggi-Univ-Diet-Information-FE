import styled from '@emotion/styled';

export const Selector = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60vh;
  border: none;
  border-radius: 15px;
  background-color: ${({ theme }) => (theme === 'black' ? '#444' : '#fff')};
  ${({ marginDirection }) => marginDirection}: 20px;

  @media (max-width: 480px) {
    background-color: transparent;
    border: none;
    width: 80vw;
    height: 32px;
    display: flex;
    flex-direction: row;
    margin: 0;
    margin-bottom: 10px;
    order: 0;
  }
`;
