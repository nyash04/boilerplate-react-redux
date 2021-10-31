import axios from "axios";
import { API_URL } from "../../../../_helpers";

export function getProjectSummary(userId, token, employeeId) {
  return axios.post(`${API_URL}/GetDashboardProjectPerformanceSummary`, { userId, token, employeeId })
}

export function getTaskPerformanceSummary(userId, token, employeeId, projectId) {
  return axios.post(`${API_URL}/GetDashboardTaskPerformanceSummary`, { userId, token, employeeId, projectId })
}