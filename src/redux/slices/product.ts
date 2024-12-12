import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ProductByCategoryResponse, ProductResponse } from '@/types';

interface ProductState {
  products: ProductResponse | null;
  loadingProducts: boolean;

  productsCategory: ProductByCategoryResponse | null;
  loadingProductsCategory: boolean;
}

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (products: ProductResponse | null) => {
    return products;
  },
);

export const getProductByCategory = createAsyncThunk(
  'product/getProductByCategory',
  async (productsCategory: ProductByCategoryResponse | null) => {
    return productsCategory;
  },
);

const productSlice = createSlice({
  initialState: {
    products: null,
    loadingProducts: false,
    productsCategory: null,
    loadingProductsCategory: false,
  } as ProductState,
  name: 'product',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loadingProducts = false;
      if (state.products) {
        state.products = {
          ...state.products,
          data: state.products.data.concat(action.payload?.data || []),
        };
      } else {
        state.products = action.payload;
      }
    });
    builder.addCase(getProductByCategory.pending, (state) => {
      state.loadingProductsCategory = true;
    });
    builder.addCase(getProductByCategory.fulfilled, (state, action) => {
      state.loadingProductsCategory = false;
      state.productsCategory = action.payload;
    });
  },
});

export default productSlice.reducer;
