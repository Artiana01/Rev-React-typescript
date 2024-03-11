import { nanoid } from "nanoid";
import { useState } from "react";

function UseTaskManager(){
    const [tasks, setTasks] = useState<Task[]>([]);
    

    const completeTask = (id:string) => {
        setTasks(tasks.filter((task: { id: string }) => task.id !== id));
        
      };
    
      const updateTask = (id:string, taskUpdate:string) => {
        const newTasks= tasks.slice();
    
        const index = tasks.findIndex((task:{id:string}) => task.id === id);
    
        newTasks[index].title = taskUpdate 
    
        setTasks(newTasks);
      };
    
      const addTask = (title:string) => {
        if (title.length < 1) {
          return;
        }
    
        const newTask:Task= {
          // using nanoid to generate unique id
          id: nanoid(),
          title,
        };
       
        
        setTasks((prevTasks)=>prevTasks.concat(newTask))
      };
    
    
    
      const filteredTasks =(searchKeyword:string)=>{
        return  tasks.filter((task:{title:string}) =>
        task.title.toLowerCase().includes(searchKeyword.toLowerCase()),
        );
      }
      return {tasks,completeTask,updateTask,addTask,filteredTasks}
}
export default UseTaskManager;