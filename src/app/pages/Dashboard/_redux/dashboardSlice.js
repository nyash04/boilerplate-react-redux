import { createSlice } from "@reduxjs/toolkit";

const initialDashboardState = {
  projects: undefined,
  tasks: undefined
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.payload.ReturnMsg}`
    },
    startCall: (state, action) => {
      state.error = null
    },
    projectSummary: (state, action) => {
      state.projects = action.payload.Data
    },
    taskSummary: (state, action) => {
      state.tasks = action.payload.Data
    }
  }
})