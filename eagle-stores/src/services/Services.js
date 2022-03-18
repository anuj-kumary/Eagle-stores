import axios from 'axios';

export const loginServices = ({ email, password }) =>
  axios.post('/api/auth/login', {
    email,
    password,
  });
