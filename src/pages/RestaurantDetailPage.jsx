import { useState } from 'react';
import styled from '@emotion/styled';
import { MenuGridView } from '../features';
import { InnerContentCard } from '../widgets';
import { useSelectedRestaurantStore } from '../shared';

export default function RestaurantDetailPage({ restaurant }) {
  const { selectedRest } = useSelectedRestaurantStore();
  const [mode, setMode] = useState(0);
  const divMode = ['메뉴', '리뷰'];
  const restaurants = [
    '경슐랭',
    '이스퀘어',
    '감성코어',
    '오아시스',
    '샐리박스',
  ];

  return (
    <InnerRestaurantContentCard theme="black" flexDirection="column">
      <MenuReviewToggleWrapper>
        <MenuReviewToggleButton>
          {[0, 1].map((id) => (
            <MenuReviewToggleContent
              key={id}
              onClick={() => setMode(id)}
              isSelected={mode === id}
            >
              {divMode[id]}
            </MenuReviewToggleContent>
          ))}
        </MenuReviewToggleButton>
      </MenuReviewToggleWrapper>
      {mode === 0 ? (
        <MenuGridView id={restaurants[selectedRest]} />
      ) : (
        <RestaurantReview>준비 중이에요!</RestaurantReview>
      )}
    </InnerRestaurantContentCard>
  );
}

const InnerRestaurantContentCard = styled(InnerContentCard)`
  height: 70vh;
`;

const RestaurantReview = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  font: 20px/1.5em Pretendard;
  color: white;
`;

const MenuReviewToggleButton = styled.div`
  width: 86px;
  height: 30px;
  background-color: #333;
  margin-left: 0px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 2px;
  box-sizing: border-box;
`;

const MenuReviewToggleWrapper = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  margin-bottom: 0px;
  padding: 5px;
`;

const MenuReviewToggleContent = styled.button`
  width: 40px;
  height: 26px;
  background-color: ${({ isSelected }) => (isSelected ? '#444' : '#333')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#aaa')};
  font: 500 12px/1.5 Pretendard;
  border: none;
  border-radius: 2px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
