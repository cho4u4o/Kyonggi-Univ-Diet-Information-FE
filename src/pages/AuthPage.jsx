import React from 'react';
import { useEffect } from 'react';

export default function AuthPage() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    fetchData(requests.kakaoLogin(code))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then((data) => {
        localStorage.setItem('token', data.access_token);
        console.log(data.access_token);
        window.location.href = '/';
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>AuthPage</div>;
}
