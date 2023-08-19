import { Api } from './Api';

export function* getRecipes() {
  const jsonData = yield Api.get(`/get-recipes`,);
  return jsonData;
}

export function* createRecipe(data) {
  const jsonData = yield Api.formPost(`/recipes`, data);
  return jsonData;
}