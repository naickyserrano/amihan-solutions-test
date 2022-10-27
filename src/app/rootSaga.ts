import { all, fork } from "redux-saga/effects";
import * as userSagas from "../containers/LoginPage/sagas";

export default function* rootSaga() {
  // executes all sagas parallel by all effect with an array
  // then all export function saga will be map with fork effect
  yield all([...Object.values(userSagas)].map(fork));
}
