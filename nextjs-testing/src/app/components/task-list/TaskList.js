import { useState } from "react";

let nextId = 3;
let iniTasks = [
  { id: 1, title: "task 1", done: true },
  { id: 2, title: "task 2", done: false },
  { id: 3, title: "task 3", done: true },
]

function TaskItem({ task, onEdit, onDelete }) {
  const [title, setTitle] = useState(task.title);
  const [editing, setEditing] = useState(false);

  const onEditHandler = () => {
    setEditing(!editing);
    if (editing) {
      const updateTask = {
        ...task,
        title
      }
      console.log("updateTask ", updateTask);
      onEdit(updateTask);
    }
  }

  const onDeleteHandler = () => {
    onDelete(task);
  }

  const onTextChangeHandler = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      {
        editing
          ? <input type="text" value={title} onChange={onTextChangeHandler} />
          : title
      }
      &nbsp;
      <button
        type="button"
        onClick={onEditHandler}>
        {
          !editing
            ? "Edit"
            : "Save"
        }
      </button>
      &nbsp;
      <button
        type="button"
        onClick={onDeleteHandler}>Delete</button>
    </div>
  )
}

function TaskEntry({ onAdd }) {
  const [task, setTask] = useState("");

  const onAddHandler = () => {
    onAdd(task);
    setTask("");
  }

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      &nbsp;
      <button
        type="button"
        onClick={onAddHandler}>
        Add
      </button>
    </div>
  )
}

function newTask(title) {
  return {
    id: ++nextId,
    title: title,
    done: true,
  }
}

export default function TaskList() {
  const [tasks, setTasks] = useState(iniTasks);

  const addTaskHandler = addTask => {
    console.log("onAdd from parent", addTask);
    const task = newTask(addTask);
    setTasks([task, ...tasks]);
  }

  const editTaskHandler = updateTask => {
    console.log("onEdit from parent", updateTask);
    const newTask = tasks.map(task => task.id === updateTask.id ? updateTask : task);
    setTasks(newTask);
  }

  const deleteTaskHandler = deleteTask => {
    console.log("onDelete from parent", deleteTask);
  }

  return (
    <div>
      <h3>TaskList</h3>
      <br />

      <TaskEntry onAdd={addTaskHandler} />
      <br />

      {
        tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task}
            onAdd={addTaskHandler}
            onEdit={editTaskHandler}
            onDelete={deleteTaskHandler} />
        )
      }
    </div>
  )
}
