import {getApiSearch, getProfileFollowing} from '@data/api/follow';
import {createAction} from '@reduxjs/toolkit';

export const setRepo = createAction('SET_REPO');
export const searchUser = createAction('SEARCH_REPO_BY_USER');

export const callApiSearch = ({size, page, keyword}) => async (dispatch) => {
  try {
    const response = await getApiSearch({size, page, keyword});
    dispatch(searchFollowing(response?.data?.items));
  } catch (err) {
    console.log('err', err);
  }
};
