import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { ProductByCategory, ProductByCategoryResponse, ProductDetails, ProductResponse } from "@/types";

interface ProductState {
  products: ProductResponse | null;
  loadingProducts: boolean;

  productsCategory: ProductByCategoryResponse | null;
  loadingProductsCategory: boolean;
  safeProducts: ProductByCategory[] | ProductDetails[] | null;
}

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (products: ProductResponse | null) => {
    return products;
  }
);

export const getProductByCategory = createAsyncThunk(
  "product/getProductByCategory",
  async ({
    productsCategory,
    detailed,
  }: {
    productsCategory: ProductByCategoryResponse | null;
    detailed: string | boolean | null;
  }) => {
    return { productsCategory, detailed };
  }
);

const productSlice = createSlice({
  initialState: {
    products: null,
    loadingProducts: false,
    productsCategory: null,
    loadingProductsCategory: false,
    safeProducts: null,
  } as ProductState,
  name: "product",
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
    builder.addCase(getProductByCategory.fulfilled, (state, 
      action: { payload: { productsCategory: ProductByCategoryResponse | null; detailed: string | boolean | null; } }
    ) => {
      state.loadingProductsCategory = false;
      if (action.payload.productsCategory) {
        const { data} = action.payload.productsCategory;
        if (action.payload.detailed === "true") {
          const firstCategory = data[0]
          state.safeProducts = firstCategory ? ([firstCategory] as ProductDetails[]) : [];
        } else {
          state.safeProducts = data as ProductByCategory[];
          state.productsCategory = action.payload.productsCategory;
          
        }
      } else {
        state.safeProducts = null;
      }

    });
  },
});

export default productSlice.reducer;
