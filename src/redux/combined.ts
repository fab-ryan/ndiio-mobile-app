import { combineReducers } from '@reduxjs/toolkit';
import { categoryApi, sliderApi , productApi} from './services';

import toastReducer from './slices/toast';
import  categorySlice  from './slices/category';
import productSlice from './slices/product';

export const combinedStore = combineReducers({
  toast: toastReducer,
  category: categorySlice,
  product: productSlice,
  [sliderApi.reducerPath]: sliderApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [productApi.reducerPath]: productApi.reducer,

});
