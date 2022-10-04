import axios, { AxiosRequestConfig } from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // env добавить
  withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  const jwtToken = localStorage.getItem('jwtToken');

  if (jwtToken) {
    // eslint-disable-next-line no-param-reassign
    config.headers!.Authorization = `Bearer ${JSON.parse(jwtToken)}`;
  }

  return config;
});
