import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/src/utils';
import {
  ProductByCategoryResponse,
  ProductResponse,
  ResponseProductDetails,
} from '@/types';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['productApi'],

  endpoints: (builder) => ({
    getProducts: builder.mutation<ProductResponse, FormData>({
      query: (body) => ({
        url: '/getAllSections',
        method: 'POST',
        body,
      }),
    }),
    getProductDetail: builder.mutation<ResponseProductDetails, FormData>({
      query: (body) => ({
        url: '/productdetail',
        method: 'POST',
        body,
      }),
    }),
    getProductByCategory: builder.mutation<ProductByCategoryResponse, FormData>(
      {
        query: (body) => ({
          url: '/categoryPage',
          method: 'POST',
          body,
        }),
      },
    ),
  }),
});

export const { useGetProductsMutation, useGetProductDetailMutation , useGetProductByCategoryMutation} =
  productApi;
