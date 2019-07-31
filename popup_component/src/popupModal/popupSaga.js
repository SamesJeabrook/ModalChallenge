import { all, call, put, takeLatest } from 'redux-saga/effects';
import { types } from './popupActions';

export function* fetchPopupParentData() {
    const endpoint = 'http://localhost:4000/popupParentState';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({ type: types.GET_POPUP_PARENT_STATE_SUCCESS, popupParentData: data });
    console.log(data);
  }

  export function* fetchPopupData() {
    const endpoint = 'http://localhost:4000/popupState';
    const response = yield call(fetch, endpoint);
    const data = yield response.json();
    yield put({ type: types.GET_POPUP_STATE_SUCCESS, popupData: data });
  }
  
  export function* getPopupParentState() {
    yield takeLatest(types.GET_POPUP_PARENT_STATE, fetchPopupParentData);
  }
  export function* getPopupState() {
    yield takeLatest(types.GET_POPUP_STATE, fetchPopupData);
  }
  
  export default function* rootSaga() {
    yield all([getPopupParentState(), getPopupState()]);
  }