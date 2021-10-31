import { combineReducers } from "redux";
import { authSlice } from "../app/modules/Auth/_redux/authSlice";
import { dashboardSlice } from "../app/pages/Dashboard/_redux/dashboardSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  dashboard: dashboardSlice.reducer,
});