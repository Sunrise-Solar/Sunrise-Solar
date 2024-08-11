import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8282',  // Your backend URL
  withCredentials: true,  // This will include credentials in the request
  headers: {
    'Content-Type': 'application/json',
  },
  
});
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // Add a response interceptor
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );
  
  export default api;