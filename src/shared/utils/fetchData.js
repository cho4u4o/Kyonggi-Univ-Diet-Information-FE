import { axios } from '../apis';

export const fetchData = async (request) => {
  try {
    const response = await axios.get(`${request}`);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};
