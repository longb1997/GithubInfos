import { getRepoByUsername } from '@data/api/github';
import { createAction } from '@reduxjs/toolkit';

export const setUsername = createAction('SET_USERNAME');
export const setRepo = createAction('SET_REPO');
export const searchUser = createAction('SEARCH_REPO_BY_USER');

export const searchRepoByUsername = ({ username, perPage = 30, page = 1 }) => async (dispatch) => {
  try {
    const response = await getRepoByUsername({ username, perPage, page });
    dispatch(setRepo(response?.data));
  } catch (err) {
    console.log('err', err);
  }
};
