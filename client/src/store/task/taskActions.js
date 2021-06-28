import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
} from "./taskTypes";

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
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskFailed = (payload) => ({
  type: ADD_TASK_FAILED,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const deleteTaskSuccess = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});

export const deleteTaskFailed = (payload) => ({
  type: DELETE_TASK_FAILED,
  payload,
});

export const updateTask = (payload) => ({
  type: UPDATE_TASK,
  payload,
});

export const updateTaskSuccess = (payload) => ({
  type: UPDATE_TASK_SUCCESS,
  payload,
});

export const updateTaskFailed = (payload) => ({
  type: UPDATE_TASK_FAILED,
  payload,
});
