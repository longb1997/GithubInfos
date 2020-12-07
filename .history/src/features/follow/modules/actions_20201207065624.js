import {getApiSearch, getProfileFollowing} from '@data/api/follow';
import {createAction} from '@reduxjs/toolkit';

export const setRepo = createAction('SET_REPO');
export const getTotalFollowing = createAction('GET_TOTAL_FOLLOWING');
export const getTotalFollower = createAction('GET_TOTAL_FOLLOWER');
export const searchFollowing = createAction('SEARCH_FOLLOWING');

export const callApiSearch = ({size, page, keyword}) => async (dispatch) => {
  try {
    const response = await getApiSearch({size, page, keyword});
    dispatch(searchFollowing(response?.data?.items));
  } catch (err) {
    console.log('err', err);
  }
};

export const callApiProfileFollowing = (id) => async (dispatch) => {
  try {
    const response = await getProfileFollowing(id);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
  }
};
