import styled from '@emotion/styled';
import {
  InnerContentCard,
  InnerContentWrapper,
  InnerTitlesWrapper,
  Selector,
} from '../widgets';
import { NoticeImg, RiceImg, useSelectedDormMenuStore } from '../shared';
import {
  MenuListView,
  MenuTimeSelectorButton,
  ReviewScrollView,
} from '../features';

export default function Home() {
  const { selectedDate, useTodayDate } = useSelectedDormMenuStore();
  return (
    <Content>
      <InnerTitlesWrapper
        logo={RiceImg}
        title="오늘의 드림타워 식단"
        subtitle={useTodayDate('all', selectedDate)}
        theme="black"
      />
      <InnerContentWrapper>
        <Selector marginDirection="margin-right">
          <MenuTimeSelectorButton />
        </Selector>
        <InnerContentCard>
          <MenuListView />
          <ReviewScrollView />
        </InnerContentCard>
      </InnerContentWrapper>
      <FloatingCircle
        onClick={() =>
          (window.location.href = 'https://open.kakao.com/o/sgcUtX3g')
        }
      >
        <Logo src={NoticeImg} />
      </FloatingCircle>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  margin: 0;
  background-color: #f4f4f4;

  @media (max-width: 480px) {
    flex-direction: column;
    height: calc(100vh - 70px);
  }
`;

const Logo = styled.img`
  margin: 0;
  @media (max-width: 480px) {
    display: none;
  }
`;

const FloatingCircle = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
