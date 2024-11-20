import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAccessToken } from '../shared/apis/axios';

export default function AuthPage() {
  const location = useLocation();
  const [code, setCode] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    const code = location['search'].split('?code=')[1];
    getAccessToken(code).then((response) => setToken(response));
    setCode(code);
  }, []);

  console.log(code, token);

  return <div>AuthPage</div>;
}
