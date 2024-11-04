import {
  GET_CATEGORIES, GET_CATEGORIES_FAIL, GET_CATEGORIES_SUCCESS,

} from '../Type';

import { takeLatest, put } from 'redux-saga/effects';
import {
  getCategories as getCategoriesApi,
} from 'src/Api';

/**
 * Get Categories
*/
function* getCategories() {
  try {
    const result = yield getCategoriesApi();
    console.log("==result==", result)
    if (result && result.category_array) {
      yield put({ type: GET_CATEGORIES_SUCCESS, data: result.category_array });
    } else {
      yield put({ type: GET_CATEGORIES_FAIL, data: result });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchGetCategories() {
  yield takeLatest(GET_CATEGORIES, getCategories);
}

