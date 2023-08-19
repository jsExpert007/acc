import {
  GET_RECIPES, GET_RECIPES_FAIL, GET_RECIPES_SUCCESS,
  CREATE_RECIPE, CREATE_RECIPE_FAIL, CREATE_RECIPE_SUCCESS,

} from '../Type';

import { takeLatest, put } from 'redux-saga/effects';
import {
  getRecipes as getRecipesApi,
  createRecipe as createRecipeApi,
} from 'src/Api';

/**
 * Get Recipes
*/
function* getRecipes() {
  try {
    const result = yield getRecipesApi();
    if (result && result.status === 'success') {
      yield put({ type: GET_RECIPES_SUCCESS, data: result.data });
    } else {
      yield put({ type: GET_RECIPES_FAIL, data: result });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchGetRecipes() {
  yield takeLatest(GET_RECIPES, getRecipes);
}

/**
 * Create Recipe
*/
function* createRecipe() {
  try {
    const result = yield createRecipeApi();
    if (result && result.status === 'success') {
      yield put({ type: CREATE_RECIPE_SUCCESS, data: result.data });
    } else {
      yield put({ type: CREATE_RECIPE_FAIL, data: result });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchCreateRecipe() {
  yield takeLatest(CREATE_RECIPE, createRecipe);
}
