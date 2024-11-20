import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.kiryong.site/',
});

export const getAccessToken = async (code) => {
  try {
    const response = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      null,
      {
        params: {
          grant_type: 'authorization_code',
          client_id: import.meta.env.VITE_KAKAO_REST_API_KEY,
          redirect_uri: import.meta.env.VITE_REDIRECT_URL,
          code,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data.access_token;
  } catch (error) {
    console.error(
      'Failed to get access token:',
      error.response?.data || error.message,
    );
  }
};
