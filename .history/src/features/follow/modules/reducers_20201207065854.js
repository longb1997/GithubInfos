import {createReducer} from '@reduxjs/toolkit';
import {setRepo, searchUser} from './actions';

const HomeReducer = createReducer(
  {
    repos: null,
    search: null,
  },
  {
    [setRepo]: (state, action) => {
      state.repo = action.payload;
    },
    [searchUser]: (state, action) => {
      state.search = action.payload;
    },
  },
);

export default HomeReducer;
