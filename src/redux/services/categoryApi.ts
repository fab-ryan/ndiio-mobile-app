import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/src/utils';
import { CategoryResponse } from '@/types/categoryTyes';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['categoryApi'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponse, void>({
      query: () => ({
        url: '/getTopCategories',
        method: 'GET',
      }),

    }),

  }),
});

export const { useGetCategoriesQuery } = categoryApi;
