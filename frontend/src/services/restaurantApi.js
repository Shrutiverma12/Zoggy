import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const getRestaurant = async () => {
  const response = await axios.get(`${URL}/restaurant`);
  console.log(response);

  return response.data;
};

// export const signinUser = async (userData) => {
//   const response = await axios.post(`${URL}/auth/signin`, userData);
//   return response.data;
// };
