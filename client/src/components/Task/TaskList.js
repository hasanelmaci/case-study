import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/task/taskActions";
import Task from "./Task";

function TaskList({ filter }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <ul>
        {filter == "All" && tasks.map((task) => <Task key={task._id} task={task} />)}
        {filter === "Active" && tasks.map((task) => !task.completed && <Task key={task._id} task={task} />)}
        {filter === "Completed" && tasks.map((task) => task.completed && <Task key={task._id} task={task} />)}
      </ul>
    </div>
  );
}

export default TaskList;
