import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

export const API_URL = 'http://csgofarm.online/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers!.Authorization = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NjU2MTE5ODA1MzQ4MTE4NiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjcwNDUyMTc2LCJleHAiOjE2NzEwNTY5NzZ9.r-GDUDHavxySg5EySqovh3pWJg7WtVGuqxAKxHGPrK0';
  return config;
});

export default $api;
