import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const signupUser = async (userData) => {
  const response = await axios.post(`${URL}/auth/signup`, userData);
  return response.data;
};
