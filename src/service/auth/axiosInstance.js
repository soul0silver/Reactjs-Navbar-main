import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://34.101.52.3:8002',
});

axiosInstance.interceptors.request.use(
  function (config) {
    let token;
    if (localStorage.getItem("token")) token = localStorage.getItem("token");
    config.headers = { authorization: `Bearer ${token}` };
    return config;
  },
  function (err) {
    console.log(err.response);

    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    window.location.href = 'http://localhost:3000/login'
  }
  return Promise.reject(error);
});
export default axiosInstance;