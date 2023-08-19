import { all, fork } from 'redux-saga/effects';

import {
  watchGetFaq
} from './Other';
import {
  watchSignIn,
  watchForgotPassword,
  watchSignUp,
} from './Auth';
import {
  watchGetRecipes,
  watchCreateRecipe
} from './Recipes';
import {
  watchGetCategories,
} from './Category';

export default function* rootSaga() {
  yield all([
    fork(watchGetFaq),

    fork(watchSignIn),
    fork(watchForgotPassword),
    fork(watchSignUp),
    fork(watchGetRecipes),
    fork(watchCreateRecipe),

    fork(watchGetCategories),


  ]);
}
