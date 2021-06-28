import {
  GET_TASKS,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILED,
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED,
  DELETE_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
} from "./taskTypes";

const initialState = {
  isLoading: false,
  tasks: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      };
    case ADD_TASK_FAILED:
    case GET_TASKS_FAILED:
    case DELETE_TASK_FAILED:
    case UPDATE_TASK_FAILED:
      return {
        error: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
        isLoading: false,
      };
    case UPDATE_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) => (task._id === action.payload._id ? action.payload : task)),
      };
    default:
      return state;
  }
};
