import UserSagas from "./users"
import { all } from "redux-saga/effects"

export default function* rootSaga(params) {
  //all like axios promise all
  yield all([...UserSagas])
}
