import * as requestFromServer from "./dashboardCrud";
import { dashboardSlice } from "./dashboardSlice";

const { actions } = dashboardSlice;

export const getProjectSummary = (userId, token, employeeId) => dispatch => {
  return requestFromServer
    .getProjectSummary(userId, token, employeeId)
    .then(response => {
      dispatch(actions.projectSummary(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const getTaskSummary = (userId, token, employeeId, projectId) => dispatch => {
  return requestFromServer
    .getTaskPerformanceSummary(userId, token, employeeId, projectId)
    .then(response => {
      dispatch(actions.taskSummary(response.data))
    })
    .catch(error => {
      console.log(error)
    })
}