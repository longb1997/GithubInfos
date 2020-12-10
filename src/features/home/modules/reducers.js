import { createReducer } from '@reduxjs/toolkit';
import { setRepo, searchUser, setUsername } from './actions';

const HomeReducer = createReducer(
  {
    username: '',
    repos: [],
    search: '',
  },
  {
    [setUsername]: (state, action) => {
      state.username = action.payload;
    },
    [setRepo]: (state, action) => {
      state.repos = action.payload;
    },
    [searchUser]: (state, action) => {
      state.search = action.payload;
    },
  },
);

export default HomeReducer;
