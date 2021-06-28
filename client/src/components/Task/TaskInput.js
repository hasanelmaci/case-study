import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addTask} from '../../store/task/taskActions'

function TaskInput() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")

    return (
        <div id='task-input'>
            <input onChange={(e)=> setInput(e.target.value)} placeholder='Add Task'/> <button onClick={()=>dispatch(addTask({description:input}))}>+</button>
        </div>
    )
}

export default TaskInput
