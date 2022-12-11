import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const API_URL = 'http://csgofarm.online/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = Cookies.get('AuthorizationCSRApp');
  return config;
});

export default $api;
