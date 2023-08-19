import { Api } from './Api';

export function* getCategories() {
  const jsonData = yield Api.get(`/get-categories`,);
  return jsonData;
}