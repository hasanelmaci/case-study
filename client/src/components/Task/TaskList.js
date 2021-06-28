import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/task/taskActions";
import Task from "./Task";

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <ul>
        {tasks?.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
