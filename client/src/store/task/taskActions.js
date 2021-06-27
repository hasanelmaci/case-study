import { GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_FAILED,ADD_TASK,ADD_TASK_SUCCESS,ADD_TASK_FAILED  } from "./taskTypes";



export const getTasks = (payload) => ({
  type: GET_TASKS,
  payload,
});

export const getTasksSuccess = (payload) => ({
  type: GET_TASKS_SUCCESS,
  payload,
});

export const getTasksFailed = (payload) => ({
  type: GET_TASKS_FAILED,
  payload,
});

export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
})

export const addTaskSuccess = (payload) => ({
  type:ADD_TASK_SUCCESS,
  payload,
})

export const addTaskFailed = (payload) => ({
  type:ADD_TASK_FAILED,
  payload,
})