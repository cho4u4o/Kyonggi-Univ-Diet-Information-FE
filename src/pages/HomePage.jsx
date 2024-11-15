import styled from '@emotion/styled';
import rice from '../assets/rice.svg';
import kiryong from '../assets/kiryong-notice.svg';
import MenuCardSection from './MenuCardSection';
import { getTodayDate } from '../utils/getTodayDate';
import InnerTitlesWrapper from '../widgets/InnerTitlesWrapper';

export default function Home() {
  return (
    <Content>
      <InnerTitlesWrapper
        logo={rice}
        title="오늘의 드림타워 식단"
        subtitle={getTodayDate('all')}
        theme="black"
      />
      <MenuCardSection />
      <FloatingCircle>
        <Logo src={kiryong} />
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

  @media (max-width: 480px) {
    display: none;
  }
`;
