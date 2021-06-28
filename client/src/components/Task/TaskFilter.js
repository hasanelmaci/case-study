import React from 'react'

function TaskFilter({setFilter}) {
    return (
        <div>
            <ul>
                <li onClick={()=>setFilter('All')}>All</li>
                <li onClick={()=>setFilter('Active')}>Active</li>
                <li onClick={()=>setFilter('Completed')}>Completed</li>
            </ul>
        </div>
    )
}

export default TaskFilter
