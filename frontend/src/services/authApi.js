import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const signupUser = async (userData) => {
  const response = await axios.post(`${URL}/auth/signup`, userData);
  return response.data;
};

export const signinUser = async (userData) => {
  const response = await axios.post(`${URL}/auth/signin`, userData);
  return response.data;
};
