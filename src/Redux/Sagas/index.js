import { all, fork } from 'redux-saga/effects';

import {
  watchGetFaq
} from './Other';

import {
  watchSignIn,
  watchForgotPassword,
  watchSignUp,
} from './Auth';

export default function* rootSaga() {
  yield all([
    fork(watchGetFaq),

    fork(watchSignIn),
    fork(watchForgotPassword),
    fork(watchSignUp),
  ]);
}
