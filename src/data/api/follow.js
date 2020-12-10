import { instanceApiService } from './index';

export async function getApiFollower({ size, page }) {
  const path = `follow/follower?size=${size}&page=${page}`;

  const response = await instanceApiService.get(path);
  return response.data;
}

export async function getApiFollowing({ size, page }) {
  const path = `follow/following?size=${size}&page=${page}`;
  const response = await instanceApiService.get(path);
  return response;
}

export async function getApiSearch({ size, page, keyword }) {
  const path = `user?size=${size}&page=${page}&keyword=${keyword}`;

  const response = await instanceApiService.get(path);
  return response;
}

export async function getApiUseWithId(userId) {
  const path = `user/${userId}`;

  const response = await instanceApiService.get(path);
  return response;
}

export async function getProfileFollowing(id) {
  console.log('getProfileFollowing -> id', id);
  const path = `user/${id}`;

  const response = await instanceApiService.get(path, {});
  console.log('getProfileFollowing -> response', response);
  return response;
}

export async function postFollow(body) {
  console.log('postFollow -> body', body);
  const path = 'follow';

  const response = await instanceApiService.post(path, body);
  return response;
}

export async function getLatestStory() {
  const path = 'user/latest';
  const response = await instanceApiService.get(path);
  return response;
}
