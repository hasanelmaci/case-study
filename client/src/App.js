import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/index";
import { getTasks, addTask } from "./store/task/taskActions";

function App() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks.tasks);

  const [description, setDescription] = useState("");

  console.log(tasks);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(getTasks());
        }}
      >
        GET TASKS
      </button>

      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description" />
      <button
        onClick={() => {
          dispatch(addTask({ description }));
        }}
      >
        Add Item
      </button>

      {tasks?.map((item) => (
        <div>
          <input defaultValue={item.description}></input> <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
