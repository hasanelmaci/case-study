import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task/taskActions";

function TaskInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const taskInputRef = useRef();

  useEffect(() => {
    taskInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ description: input }));
    taskInputRef.current.value = "";
  };

  return (
    <div id="task-input">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input ref={taskInputRef} onChange={(e) => setInput(e.target.value)} placeholder="Add Task" />
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default TaskInput;
