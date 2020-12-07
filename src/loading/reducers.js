import { createReducer } from '@reduxjs/toolkit';
import { showLoading, stopLoad } from './actions';

const loadingReducer = createReducer(
  {
    isLoading: false,
    loadingText: 'Please wait',
  },
  {
    [showLoading]: (state, action) => {
      state.isLoading = true;
    },
    [stopLoad]: (state, action) => {
      state.isLoading = false;
    },
  },
);

export default loadingReducer;
