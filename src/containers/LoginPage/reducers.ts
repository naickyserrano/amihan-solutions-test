import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";
import { RootState } from "../../app/store";

// initial State
const userInitialState: UserState = {
  authToken: "",
  error: "",
  loading: false,
};

// slice
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    postUser: (state, action) => {
      return {
        ...state,
        loading: true,
        error: "",
      };
    },
    postUserSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        error: "",
        authToken: action.payload.access_token,
      };
    },
    postUserFailed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

// actions
export const { postUser, postUserSuccess, postUserFailed } = userSlice.actions;

// selectors
export const selectPostUserToken = (state: RootState): string =>
  state.userReducer.authToken;
export const selectPostUserLoading = (state: RootState): boolean =>
  state.userReducer.loading;
export const selectPostUserError = (state: RootState): string =>
  state.userReducer.error;

export default userSlice.reducer;
