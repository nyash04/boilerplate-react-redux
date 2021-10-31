import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: null,
  masterList: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.payload.ReturnMsg}`
    },
    startCall: (state, action) => {
      state.error = null
    },
    login: (state, action) => {
      state.user = action.payload.Data
    },
    logout: (state, action) => {
      state.user = undefined
      state = null;
    },
    masterList: (state, action) => {
      state.masterList = action.payload.Data
    }
  }
});