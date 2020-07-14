import { takeEvery, put, call } from "redux-saga/effects";
import { GET_DATA, putData } from "../actions/pageActions";

async function fetchData() {
  return await fetch("https://test-apiiii.herokuapp.com").then((response) =>
    response.json()
  );
}

function* workerGetData() {
  const data = yield call(fetchData);

  yield put(putData(data));
}
export function* watchGetData() {
  yield takeEvery(GET_DATA, workerGetData);
}
