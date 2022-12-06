import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const supportSlice = createApi({
  reducerPath: 'support',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://csgofarm.online',
    prepareHeaders: (headers) => {
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NjU2MTE5ODQyMzI4NjQ0OCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3MDA4MjgwMywiZXhwIjoxNjcwNjg3NjAzfQ.XDwUBGQGOjE96A7KMbC0eqlwQwDAr7kuQl7WIswajmk';

      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
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
