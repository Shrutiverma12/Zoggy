import axios from 'axios';

const URL = 'http://localhost:5000/api';

export const getRestaurant = async () => {
  const response = await axios.get(`${URL}/restaurant`);
  return response.data;
};

export const getRestaurantById = async ({ id }) => {
  const response = await axios.get(`${URL}/restaurant/${id}`);
  return response.data;
};
