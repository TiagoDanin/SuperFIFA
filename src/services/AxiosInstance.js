import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import {navigate} from '~/services/NavigationService';

export const configServer = {
  baseURL: 'https://web.voxdatati.com.br:9090',
  timeout: 5000,
};

// axios  instance
const axiosInstance = axios.create(configServer);

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use(
  async config => {
    if (!config.url.startsWith('/users/login')) {
      const token = await AsyncStorage.getItem('authentication:token');
      config.headers.Authorization = `Bearer ${token}`; // eslint-disable-line no-param-reassign
    }
    return config;
  },
  response => Promise.reject(response)
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    if (error?.response?.status === 401) {
      navigate('Login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
