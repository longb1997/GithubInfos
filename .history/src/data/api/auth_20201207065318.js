import {instanceApiService, returnFormData} from './index';

export async function loginApi(email, password) {
  const sigin = 'auth/login';
  const body = {
    username: email,
    password: password,
  };

  const response = await instanceApiService.post(sigin, body);
  return response;
}

export async function socialLogin(accessToken, provider) {
  const path = 'auth/login/social';
  const body = {
    provider,
    accessToken,
  };

  const response = await instanceApiService.post(path, body);
  return response;
}

export async function socialSignUp(param) {
  const path = 'auth/register/social';

  try {
    const response = await instanceApiService.post(path, param);
    return response.data;
  } catch (error) {
    console.log('errror', error);
  }
}

export async function getApiUserInfo() {
  const path = `me`;
  const response = await instanceApiService.get(path, {});

  return response;
}

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
