import { Categories } from '@/src/types/categoryTyes';
import { createSlice } from '@reduxjs/toolkit';
import { categoryApi } from '../services';

interface CategoryState {
  categories: Categories[] | null;
  loadingCategories: boolean;
}

 const categorySlice = createSlice({
  initialState: {
    categories: null,
    loadingCategories: false,
  } as CategoryState,
  name: 'category',
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      categoryApi.endpoints.getCategories.matchPending,
      (state) => {
        state.loadingCategories = true;
      },
    );
    builder.addMatcher(
      categoryApi.endpoints.getCategories.matchFulfilled,
      (state, action) => {
        state.loadingCategories = false;
        state.categories = action.payload.data;
      },
    );
  },
});

export default categorySlice.reducer;