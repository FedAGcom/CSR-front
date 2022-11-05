import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginSlice = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
  }),
  endpoints: (builder) => ({
    postLogin: builder.query({
      query: () => ({
        url: `/api/v1/auth/steam-registration`,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePostLoginQuery } = loginSlice;
