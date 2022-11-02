import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginSlice = createApi({
  reducerPath: 'login',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
    // mode: 'no-cors',
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: () => ({
        url: `/api/v1/auth/steam-registration`,
        method: 'POST',
        // transformResponse: (response: { data: any }) => {
        //   console.log(response.data, '88888');
        //   return response.data;
        // },
      }),
    }),
  }),
});

export const { usePostLoginMutation } = loginSlice;
