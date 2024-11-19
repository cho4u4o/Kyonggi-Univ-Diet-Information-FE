import styled from '@emotion/styled';

export const SelectorButton = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: none;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? '#00abaa' : theme === 'black' ? '#444' : '#fff'};
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
    font-size: ${({ theme }) => (theme === 'black' ? '11px' : '15px')};
    border-radius: 15px;
    margin-right: ${(props) => props.marginright}px;
  }
`;
