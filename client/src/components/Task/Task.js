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
    dispatch(updateTask({ ...task, description: editTaskInput}));
  };

  const handleCompletedOnClick = () =>{
    dispatch(updateTask({ ...task, completed: !isCompleted}));
    setIsCompleted(!isCompleted)
  }

  return (
    <li>
      <div>
        {taskItemType === "text" ? (
          <span onClick={() => handleCompletedOnClick() }>
            {task.description} {isCompleted ? "completed" : "not completed"}{" "}
          </span>
        ) : (
          <input defaultValue={task.description} onChange={(e) => setEditTaskInput(e.target.value)}></input>
        )}
        -{" "}
      </div>
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

      <button onClick={() => dispatch(deleteTask(task._id))}>Sil</button>
    </li>
  );
}

export default Task;
