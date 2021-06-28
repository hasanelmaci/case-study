import { useState, memo } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";

function TaskContainer() {
  const [filter, setFilter] = useState("All");

  return (
    <div id="task-container">
      <h1>To-do List</h1>
      <TaskInput />
      <TaskFilter setFilter={setFilter} filter={filter} />
      <TaskList filter={filter} />
    </div>
  );
}

export default memo(TaskContainer);
