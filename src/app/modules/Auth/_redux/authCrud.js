import axios from "axios";
import { API_URL } from "../../../../_helpers";

export function login(username, pass) {
  return axios.post(`${API_URL}/Login`, { username, pass });
}

export function logout(userId, token) {
  return axios.post(`${API_URL}/LogoutEmptime`, { userId, token });
}

export function getMasterList(userid, token, emptype) {
  return axios.post(`${API_URL}/MasterListData`, { userid, token, emptype });
}