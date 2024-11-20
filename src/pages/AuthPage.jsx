import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchKakao } from '../shared/apis/axios';

export default function AuthPage() {
  const location = useLocation();
  const [code, setCode] = useState();
  const [token, setToken] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    if (!token) {
      const code = location.search.split('?code=')[1];
      fetchKakao(code).then((response) => {
        setToken(response.token);
        setEmail(response.email);
        setCode(code);
      });
    }
  }, []);

  return (
    <>
      {token && (
        <div>
          성공
          <br />
          <p> code: ${code}</p>
          <p> token: ${token}</p>
          <p> email: ${email}</p>
        </div>
      )}
    </>
  );
}
