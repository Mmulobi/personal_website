import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const submitContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const response = await axios.post(`${API_URL}/contacts`, data);
  return response.data;
};