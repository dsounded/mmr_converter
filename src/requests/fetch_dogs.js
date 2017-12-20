import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

function* fetchDogs(action) {
  let data = yield call(fetch);
  yield put({type: "DOGS_FETCHED", records: data})
}

function fetch() {
  return axios.get('https://dog.ceo/api/breeds/list').then((response) => response.data.message);
}

export default function* fetcher() {
  yield takeLatest("FETCH_DOGS", fetchDogs);
}
