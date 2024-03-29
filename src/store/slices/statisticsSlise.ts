import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const statisticsSlise = createApi({
  reducerPath: 'statistics',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
  }),
  endpoints: (builder) => ({
    getOpenCaseCount: builder.query({
      query: () => ({
        url: `/api/v1/itemsWon/count`,
        method: 'GET',
      }),
    }),
    getUsersCount: builder.query({
      query: () => ({
        url: `/api/v1/users/count`,
        method: 'GET',
      }),
    }),
    getLastItemsWon: builder.query({
      query: () => ({
        url: `/api/v1/itemsWon/get-last-items-won`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetOpenCaseCountQuery, useGetUsersCountQuery, useGetLastItemsWonQuery } = statisticsSlise;
