import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.kiryong.site/',
});

export const fetchKakao = async (code) => {
  try {
    const response = await instance.get('api/kakao-login', {
      params: { code },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to get data:', error.response?.data || error.message);
  }
};
