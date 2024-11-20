import styled from '@emotion/styled';
import { Kakao } from '../shared';
import { InnerContentCard } from '../widgets';

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginWrapper>
        <Description>
          카카오 로그인 후 <br />더 많은 기능을 이용해보세요!
        </Description>
        <KakaoLoginButton
          onClick={() => {
            window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_REDIRECT_URL}`;
          }}
        >
          <Symbol src={Kakao} />
          카카오 로그인
        </KakaoLoginButton>
      </LoginWrapper>
    </LoginContainer>
  );
}

const LoginWrapper = styled(InnerContentCard)`
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  height: 50%;
  backdrop-filter: blur(30px);
  box-shadow: 0px 0px 30px rgba(227, 228, 237, 0.37);
  border: 2px solid rgba(255, 255, 255, 0.18);
  background-color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Description = styled.p`
  text-align: center;
  font: 18px/1.5em Pretendard;
`;

const Symbol = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const KakaoLoginButton = styled.button`
  height: 50px;
  width: 300px;
  background-color: #fee500;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font: 18px Pretendard;

  &:hover {
    background-color: #e8d102;
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const LoginContainer = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;
  background-color: rgba(0, 171, 170, 0.4);

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
  }
`;
