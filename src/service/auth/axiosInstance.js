import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: window.env.BASE_URL || '',
});

axiosInstance.interceptors.request.use(
  function (config) {
    let token;
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
      config.headers = { authorization: `Bearer ${token}` };
      return config;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    localStorage.clear()
    window.location.href = '/login'
  }
  return Promise.reject(error);
});
export default axiosInstance;