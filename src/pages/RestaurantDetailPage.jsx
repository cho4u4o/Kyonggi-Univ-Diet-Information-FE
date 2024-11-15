import { useState } from 'react';
import styled from '@emotion/styled';
import MenuGridView from '../features/menu/MenuGridView';
import { InnerContentCard } from '../widgets/InnerContentComponents';

export default function RestaurantDetailPage({}) {
  const [mode, setMode] = useState(0);
  const divMode = ['메뉴', '리뷰'];

  return (
    <InnerContentCard theme="black">
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
      {mode === 0 ? <MenuGridView /> : <ReviewScrollView />}
    </InnerContentCard>
  );
}

const MenuReviewToggleButton = styled.div`
  width: 86px;
  height: 30px;
  background-color: #333;
  margin-left: 10px;
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
  margin-bottom: 10px;
`;
const MenuReviewToggleContent = styled.button`
  width: 40px;
  height: 26px;
  background-color: ${({ isSelected }) => (isSelected ? '#444' : '#333')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#aaa')};
  font: 500 12px/1.5 Pretendard;

  border: none;
  border-radius: 2px;
`;

const ReviewScrollView = styled.div`
  overflow: scroll;
  height: 44vh;
`;
