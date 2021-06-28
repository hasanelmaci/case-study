import React from "react";

function TaskFilter({ setFilter, filter }) {
  return (
    <div className="task-filter">
      <ul>
        <li className={filter === "All" ? `task-filter-active` : null} onClick={() => setFilter("All")}>
          All
        </li>
        <li className={filter === "Active" ? `task-filter-active` : null} onClick={() => setFilter("Active")}>
          Active
        </li>
        <li className={filter === "Completed" ? `task-filter-active` : null} onClick={() => setFilter("Completed")}>
          Completed
        </li>
      </ul>
    </div>
  );
}

export default TaskFilter;
