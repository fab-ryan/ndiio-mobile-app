import { createSlice } from '@reduxjs/toolkit';

export interface SetupState {
  isReadyFirstTime: boolean;
  isReady: boolean;
}

const initialState: SetupState = {
  isReadyFirstTime: false,
  isReady: false,
};

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    setReadyFirstTime(state) {

      state.isReadyFirstTime = true;
    },
    setReady(state) {
      state.isReady = true;
    },
  },
});

export const { setReadyFirstTime, setReady } = setupSlice.actions;
