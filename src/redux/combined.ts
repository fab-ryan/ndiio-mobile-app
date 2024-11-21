import { combineReducers } from '@reduxjs/toolkit';
import { categoryApi, sliderApi } from './services';

import toastReducer from './slices/toast';
import  categorySlice  from './slices/category';

export const combinedStore = combineReducers({
  toast: toastReducer,
  category: categorySlice,
  [sliderApi.reducerPath]: sliderApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,

});
