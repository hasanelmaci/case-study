import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {addTask} from '../../store/task/taskActions'

function TaskInput() {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.tasks);
    const [input, setInput] = useState("")

    const handleInput = () =>{
        
        console.log(input)
    }

    return (
        <div>
            <input onChange={(e)=> setInput(e.target.value)} /> <button onClick={()=>dispatch(addTask({description:input}))}>Add</button>
        </div>
    )
}

export default TaskInput
