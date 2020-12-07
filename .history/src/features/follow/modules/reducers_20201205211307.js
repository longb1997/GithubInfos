import { createReducer } from '@reduxjs/toolkit';
import {
  setFollow,
  getTotalFollowing,
  getTotalFollower,
  searchFollowing,
} from './actions';

const followReducer = createReducer(
  {
    follow: null,
    totalFollowing: null,
    totalFollower: null,
    search: null,
  },
  {
    [setFollow]: (state, action) => {
      state.follow = action.payload;
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

export default followReducer;
