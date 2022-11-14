import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

export const depositAPI = createApi({
  reducerPath: 'depositApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
    prepareHeaders: function(headers) {
      const token: string | undefined = Cookies.get('AuthorizationCSRApp');
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    }
  }),
  endpoints: function(build) {
    return {
      getCreateDepositLink: build.query<string, string>({
        query: function() {
          return {
            url: '/api/v1/create-deposit',
          }
        }
      })
    }
  }
});