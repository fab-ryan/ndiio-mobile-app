import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@/src/utils';
import { SliderResponse } from '@/src/types';

export const sliderApi = createApi({
  reducerPath: 'slider',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['slider'],
  endpoints: (build) => ({
    getSlider: build.query<SliderResponse, void>({
      query: () => ({
        url: '/commonnarray',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetSliderQuery } = sliderApi;
