import styled from '@emotion/styled';

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 60vh;
  border: none;
  border-radius: 15px;
  background-color: #fff;
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
  }
`;

export const SelectorButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: ${(props) => (props.isSelected ? '#00abaa' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#ccc')};
  cursor: pointer;
  height: ${({ height }) => height}px;
  width: 80px;
  font-size: 16px;
  font-family: Pretendard;
  transition:
    background-color 0.3s ease,
    background-position 0.3s ease;

  @media (max-width: 480px) {
    width: 16vw;
    height: 32px;
    font-size: 15px;
    border-radius: 15px;
    margin-right: ${(props) => props.marginright}px;
  }
`;
