import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.kiryong.site/',
  params: {
    language: 'ko-KR',
  },
});
