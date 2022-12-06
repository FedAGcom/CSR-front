import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const supportSlice = createApi({
  reducerPath: 'support',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
  }),
  tagTypes: ['TechRequests', 'EmailRequests'],
  endpoints: (builder) => ({
    getRequests: builder.query({
      query: () => ({
        url: `/api/v1/support`,
        method: 'GET',
      }),
      providesTags: ['TechRequests'],
    }),
    deleteRequest: builder.mutation({
      query: (id: number) => ({
        url: `/api/v1/support/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TechRequests'],
    }),
    sendRequest: builder.mutation({
      query: (data) => ({
        url: `/api/v1/support`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['TechRequests'],
    }),
  }),
});

export const { useGetRequestsQuery, useDeleteRequestMutation, useSendRequestMutation } = supportSlice;
