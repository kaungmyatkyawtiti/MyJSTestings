import { useState } from "react";
import TaskItem from './TaskItem';
import TaskEntry from './TaskEntry';

let iniTasks = [
  { id: 1, title: "task 1", done: true },
  { id: 2, title: "task 2", done: false },
  { id: 3, title: "task 3", done: true },
]

let nextId = 3;

export default function TaskList() {
  const [tasks, setTasks] = useState(iniTasks);

  const handleAddTask = addTask => {
    console.log("onAdd from parent", addTask);
    const newTask = {
      id: ++nextId,
      title: addTask,
      done: true,
    }
    setTasks([newTask, ...tasks]);
  }

  const handleEditTask = updateTask => {
    console.log("onEdit from parent", updateTask);
    const newTask = tasks.map(task => task.id === updateTask.id ? updateTask : task);
    setTasks(newTask);
  }

  const handleDeleteTask = deleteTask => {
    console.log("onDelete from parent", deleteTask);
    const filterdTasks = tasks.filter(task => task.id !== deleteTask.id);
    setTasks(filterdTasks);
  }

  return (
    <div style={{ maxWidth: 900, margin: "20px auto" }}>
      <h3>TaskList</h3>
      <br />

      <TaskEntry onAdd={handleAddTask} />
      <br />

      {
        tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask} />
        )
      }
    </div>
  )
}
