import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQueryWithToken } from '@/utils';
import { AddToCartRequest, CartResponse, CouponResponse } from '@/types';

export const cartApi = createApi({
  baseQuery: fetchBaseQueryWithToken,
  reducerPath: 'cartApi',
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getCart: builder.query<CartResponse, null>({
      query: () => ({
        url: '/getCart',
        method: 'GET',
      }),
      providesTags: ['Cart'],
      extraOptions: { maxRetries: 3, retryOn: [401, 500, 502, 503, 504] },
    }),
    addToCart: builder.mutation<CartResponse, AddToCartRequest>({
      query: (body) => ({
        url: '/addCartUpdate',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    myCart: builder.mutation<CartResponse, FormData>({
      query: (body) => ({
        url: '/myCart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    applyCoupon: builder.mutation<CouponResponse, FormData>({
      query: (body) => ({
        url: 'Coupan',
        method: 'POST',
        body: body,
      }),
    }),
    deleteCart: builder.mutation<CartResponse, AddToCartRequest>({
      query: (body) => ({
        url: '/deleteCart',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cart'],
    }),
    checkoutCart: builder.mutation({
      query: (body) => ({
        url: '/addressCheckoutCash',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useDeleteCartMutation,
  useMyCartMutation,
  useApplyCouponMutation,
  useCheckoutCartMutation,
} = cartApi;
