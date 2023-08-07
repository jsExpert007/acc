import { Api } from './Api';

export function* signIn(data) {
  const jsonData = yield Api.post(`/login`, data);
  return jsonData;
}

export function* forgotPassword(data) {
  const jsonData = yield Api.post(`/forgotpassword`, data);
  return jsonData;
}

export function* signUp(data) {
  const jsonData = yield Api.post(`/mims_client_signup`, data);
  return jsonData;
}