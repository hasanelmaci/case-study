import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../store/task/taskActions";

function Task({ task }) {
  const [taskItemType, setTaskItemType] = useState("text");
  const [editTaskInput, setEditTaskInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const dispatch = useDispatch();

  const handleOKButton = (task) => {
    setTaskItemType("text");
    dispatch(updateTask({ ...task, description: editTaskInput }));
  };

  const handleCompletedOnClick = () => {
    dispatch(updateTask({ ...task, completed: !isCompleted }));
    setIsCompleted(!isCompleted);
  };

  return (
    <li className="task-item">
      <div className={`task-item-container ${isCompleted && `completed`}`}>
        {taskItemType === "text" ? (
          <span onClick={() => handleCompletedOnClick()}>{task.description}</span>
        ) : (
          <input defaultValue={task.description} onChange={(e) => setEditTaskInput(e.target.value)}></input>
        )}
      </div>
      <div className="task-options">
        {taskItemType === "text" ? (
          <button
            onClick={() => {
              setTaskItemType("input");
            }}
          >
            Edit
          </button>
        ) : (
          <button onClick={() => handleOKButton(task)}>OK</button>
        )}

        <button onClick={() => dispatch(deleteTask(task._id))}>X</button>
      </div>
    </li>
  );
}

export default Task;
