import { nanoid } from "nanoid";
import { useState } from "react";
import "./TaskManager.css";

// TODO: create custom hook to manage task state
export const TaskManager = () => {
  const [title, setTitle] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [tasks, setTasks] = useState([]);

  // remove task from list
 
  const completeTask = (id : any) => {
    setTasks(tasks.filter((task : any) => task.id !== id));
  };
  const updateTask = (id : any, taskUpdate : any) => {
    const newTasks: any  = tasks.slice();

    const index : any = tasks.findIndex((task :any) => task.id === id);

    newTasks[index] = taskUpdate;

    setTasks(newTasks);
  };

   const addTask: any= () => {
    if (title.length < 1) {
      return;
    }

    const newTask :any  = {
      // using nanoid to generate unique id
      id: nanoid(),
      title,
    };
    setTasks((prev) => prev.concat(newTask));
    setTitle("");
  };

  const handleSearch = (ev :any) => {
    setSearchKeyword(ev.target.value);
  };

  const filteredTasks = tasks.filter((task : any ) =>
    task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
  );

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

        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="container">
      {filteredTasks.map((task : any) => (
          <li key={task.id} className="task">
            <div className="task">
              <input
                type="text"
                placeholder="Add new task"
                value={task.title}
                onChange={(e) => updateTask(task.id, { title: e.target.value })}
              />
              <button onClick={() => completeTask(task.id)}>Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
