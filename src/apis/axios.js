import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://kiryong.site/',
  params: {
    language: 'ko-KR',
  },
});

export default instance;
