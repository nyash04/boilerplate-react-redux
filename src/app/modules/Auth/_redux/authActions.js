import * as requestFromServer from "./authCrud";
import { authSlice } from "./authSlice";

const { actions } = authSlice;

export const login = (username, pass) => dispatch => {
  return requestFromServer
    .login(username, pass)
    .then(response => {
      const data = response.data;
      if (data.ReturnCode === "4") {
        dispatch(actions.catchError(data.ReturnMsg))
      } else if (data.ReturnCode === '1') {
        dispatch(actions.login(data));
        dispatch(getMasterList(data.Data.empid, data.Data.token, data.Data.emptype))
      }
    })
    .catch(error => {
      console.log(error)
    })
}


export const logout = (userId, token) => dispatch => {
  return requestFromServer
    .logout(userId, token)
    .then(response => {
      dispatch(actions.logout());
    })
    .catch(error => {
      console.log(error)
    })
}

export const getMasterList = (userid, token, emptype) => dispatch => {
  return requestFromServer
    .getMasterList(userid, token, emptype)
    .then(response => {
      dispatch(actions.masterList(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}