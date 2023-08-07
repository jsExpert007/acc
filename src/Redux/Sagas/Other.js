import { GET_FAQ, GET_FAQ_SUCCESS, GET_FAQ_FAIL } from '../Type';

import { takeLatest, put } from 'redux-saga/effects';
import { getFaq as getFaqApi } from 'src/Api';

function* getFaq(payload) {
  try {
    const result = yield getFaqApi(payload.data.mims_faqcategory_id);
    if (result && result.data) {
      yield put({ type: GET_FAQ_SUCCESS, data: result.data });
    } else {
      yield put({ type: GET_FAQ_FAIL, data: [] });
    }
  } catch (err) {
    alert(err);
  }
}

export function* watchGetFaq() {
  yield takeLatest(GET_FAQ, getFaq);
}
