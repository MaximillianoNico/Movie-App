import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'http://www.omdbapi.com',
});

const errorHandler = error => {
  return Promise.reject({ ...error });
};

axiosInstance.interceptors.response.use(
  response => response,
  error => errorHandler(error),
);

export default axiosInstance;
