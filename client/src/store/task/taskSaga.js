import { takeEvery, all, call, put, takeLeading } from "redux-saga/effects";
import { getTasks, addTask, deleteTask, updateTask } from "../../utils/api";
import { GET_TASKS, ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./taskTypes";
import {
  getTasksSuccess,
  getTasksFailed,
  addTaskSuccess,
  addTaskFailed,
  deleteTaskSuccess,
  deleteTaskFailed,
  updateTaskFailed,
  updateTaskSuccess,
} from "./taskActions";

function* getTasksWatcher() {
  yield takeEvery(GET_TASKS, getTasksSaga);
}

function* addTaskWatcher() {
  yield takeLeading(ADD_TASK, addTaskSaga);
}

function* deleteTaskWatcher() {
  yield takeEvery(DELETE_TASK, deleteTaskSaga);
}

function* updateTaskWatcher() {
  yield takeEvery(UPDATE_TASK, updateTaskSaga);
}

function* getTasksSaga() {
  try {
    const data = yield call(getTasks);
    yield put(getTasksSuccess(data));
  } catch (error) {
    yield put(getTasksFailed(error));
  }
}

function* addTaskSaga(action) {
  try {
    const data = yield call(addTask, action.payload);
    yield put(addTaskSuccess({ ...action.payload, ...data }));
  } catch (error) {
    yield put(addTaskFailed(error));
  }
}

function* deleteTaskSaga(action) {
  try {
    const data = yield call(deleteTask, action.payload);
    yield put(deleteTaskSuccess(data));
  } catch (error) {
    yield put(deleteTaskFailed(error));
  }
}

function* updateTaskSaga(action) {
  try {
    const data = yield call(updateTask, action.payload);
    yield put(updateTaskSuccess(data));
  } catch (error) {
    yield put(updateTaskFailed(error));
  }
}

export default function* taskSaga() {
  yield all([getTasksWatcher(), addTaskWatcher(), deleteTaskWatcher(), updateTaskWatcher()]);
}
