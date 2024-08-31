import {
  Action,
  configureStore,
  Store,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { persistStore, persistReducer } from 'redux-persist';
