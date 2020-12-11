import { instanceApiService } from './index';

export async function getInfoUserByName(keyword) {
  const path = `users/${keyword}`;
  return await instanceApiService.get(path);
}

export async function getRepoByUsername({ username, perPage = 30, page = 1 }) {
  const path = `users/${username}/repos?per_page=${perPage}&page=${page}`;
  return await instanceApiService.get(path);
}

export async function getStargazerByRepoOfUser({
  username = 'hngocl',
  repoName = 'BoilerplateReactNative',
  perPage = 30,
  page = 1,
}) {
  const path = `repos/${username}/${repoName}/stargazers?per_page=${perPage}&page=${page}`;
  return await instanceApiService.get(path);
}
