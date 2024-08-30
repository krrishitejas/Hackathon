import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-server.com/api',
});

export default api;