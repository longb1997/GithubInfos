import {instanceApiService, returnFormData} from './index';

export async function imagesApi(id) {
  const path = `user/image/${id}`;
  const response = await instanceApiService.get(path, {});
  return response.data;
}

export async function updateProfileApi(userId, body) {
  const path = `user/profile/${userId}`;

  const response = await instanceApiService.put(path, body);
  return response;
}

export async function getApiUpdateHome(userId, param) {
  const path = `user/home/${userId}`;

  const response = await instanceApiService.put(path, param);
  return response;
}

export async function getApiUserId(userId) {
  const path = `user/${userId}`;

  const response = await instanceApiService.get(path, {});
  return response;
}
