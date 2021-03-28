import { takeEvery, call, fork, put } from "redux-saga/effects"
import * as actions from "../actions/users"
import * as api from "../api/user"

function* getUsers() {
  try {
    const result = yield call(api.getUsers)
    yield put(actions.getUsersSuccess(result.data.data))
    console.log(result.data.data, "result")
    //
    //
    //
  } catch (e) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
  //consistently wating true loop
}

const userSagas = [fork(watchGetUsersRequest)]

export default userSagas
