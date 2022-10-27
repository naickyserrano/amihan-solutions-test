import { call, put, takeLatest } from "redux-saga/effects";
import { postUserApi } from "./apis";
import { PostLoginPayload, YieldReturn } from "./interfaces";
import { postUser, postUserSuccess, postUserFailed } from "./reducers";
import { PayloadAction } from "@reduxjs/toolkit";
import { getErrorMessage } from "../../utils/utils";

// worker Sagas
function* handlePostUser(action: PayloadAction<PostLoginPayload>): any {
  const { payload } = action;

  try {
    const user: YieldReturn<typeof postUserApi> = yield call(
      postUserApi,
      payload
    );

    yield put(postUserSuccess(user.data));
  } catch (error) {
    const errorMessage = getErrorMessage(error);

    yield put(postUserFailed(errorMessage));
  }
}

// warcher Sagas
export function* watchHandlePostUser() {
  yield takeLatest(postUser.type, handlePostUser);
}
