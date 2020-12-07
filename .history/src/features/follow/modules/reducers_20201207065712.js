import {createReducer} from '@reduxjs/toolkit';
import {
  setRepo,
  getTotalFollowing,
  getTotalFollower,
  searchFollowing,
} from './actions';

const HomeReducer = createReducer(
  {
    repos: null,
    totalFollowing: null,
    totalFollower: null,
    search: null,
  },
  {
    [setRepo]: (state, action) => {
      state.repo = action.payload;
    },
    [getTotalFollowing]: (state, action) => {
      state.totalFollowing = action.payload;
    },
    [getTotalFollower]: (state, action) => {
      state.totalFollower = action.payload;
    },
    [searchFollowing]: (state, action) => {
      state.search = action.payload;
    },
  },
);

export default HomeReducer;
