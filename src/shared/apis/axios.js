import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://kiryong.site/',
  params: {
    language: 'ko-KR',
  },
});
