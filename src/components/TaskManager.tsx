import { nanoid } from "nanoid";
import { SetStateAction, useState } from "react";
import "./TaskManager.css";
import UseTaskManager from "./useTaskManager";

// TODO: create custom hook to manage task state
export const TaskManager = () => {
  const [title, setTitle] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { tasks,completeTask, updateTask, addTask, filteredTasks } = UseTaskManager();
  const handleSearch=(e:{target:{value:string}})=>{
   setSearchKeyword(e.target.value)
  }
  const handleAddTask=()=>{
    addTask(title)
    setTitle("")

  }
  const tasksFilterd = filteredTasks(searchKeyword)
  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div>
        <input type="text" onChange={handleSearch} placeholder="Search Task" />
      </div>

      <div className="task">
        <input
          type="text"
          value={title}
          onChange={(ev) => {
            setTitle(ev.target.value);
          }}
        />

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="container">
        {tasksFilterd.map((task) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id,  e.target.value )}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
