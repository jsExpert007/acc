import {
  SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL,
  FORGOT_PASSWORD,  FORGOT_PASSWORD_FAIL,  FORGOT_PASSWORD_SUCCESS,
  SIGN_UP,  SIGN_UP_FAIL,  SIGN_UP_SUCCESS,
} from '../Type';

import { takeLatest, put } from 'redux-saga/effects';
import {
  signIn as signInApi,
  forgotPassword as forgotPasswordApi,
  signUp as signUpApi,
} from 'src/Api';

/**
 * Login
*/
function* signIn(payload) {
  try {
    const result = yield signInApi(payload.data);
    if (result && result.status === 'success') {
      yield put({ type: SIGN_IN_SUCCESS, data: result.data, message: result.message });
    } else {
      yield put({ type: SIGN_IN_FAIL, data: result, message: result.message });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchSignIn() {
  yield takeLatest(SIGN_IN, signIn);
}

/**
 * Forgot Password
*/
function* forgotPassword(payload) {
  try {
    const result = yield forgotPasswordApi(payload.data);
    if (result) {
      yield put({ type: FORGOT_PASSWORD_SUCCESS, data: result });
    } else {
      yield put({ type: FORGOT_PASSWORD_FAIL, data: result });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}

/**
 * Student Sign Up
*/
function* signUp(payload) {
  try {
    const result = yield signUpApi(payload.data);
    if (result && result.token) {
      yield put({ type: SIGN_UP_SUCCESS, data: result });
    } else {
      yield put({ type: SIGN_UP_FAIL, data: result });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchSignUp() {
  yield takeLatest(SIGN_UP, signUp);
}
