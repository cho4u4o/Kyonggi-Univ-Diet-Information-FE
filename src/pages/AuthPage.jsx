import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchKakao } from '../shared/apis/axios';
import { Loading } from '../shared';

export default function AuthPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const code = location.search.split('?code=')[1];
    if (code) {
      fetchKakao(code).then((response) => {
        document.cookie = `token=${response.token}; max-age=3600; path=/`;
        setIsLoading(false);
        navigate('/');
      });
    } else {
      setIsLoading(false);
    }
  }, [location.search, navigate]);

  return (
    <AuthSection>
      {isLoading ? (
        <div>
          <img src={Loading} />
          <Description>로그인 중...</Description>
        </div>
      ) : (
        <Description>로그인에 실패했습니다.</Description>
      )}
    </AuthSection>
  );
}

const Description = styled.p`
  width: 100%;
  text-align: center;
  font: 20px;
  marg
`;

const AuthSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;
