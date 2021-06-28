import { combineReducers } from "redux";
import taskReducer from "../store/task/taskReducer";

export default combineReducers({
  tasks: taskReducer,
});
