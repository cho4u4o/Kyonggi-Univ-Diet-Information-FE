import axios from '../apis/axios';

export const fetchData = async (request) => {
  try {
    const response = await axios.get(`${request}`);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
