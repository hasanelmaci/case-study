import {useState} from 'react'
import TaskList from './TaskList'
import TaskInput from './TaskInput'
import TaskFilter from './TaskFilter'


function TaskContainer() {

    const [filter, setFilter] = useState('All')

    return (
        <div id='task-container'>
            <TaskInput />
            <TaskList filter={filter} />
            <TaskFilter setFilter={setFilter} filter={filter} />
        </div>
    )
}

export default TaskContainer
