import { useReducer } from "react";
import TaskItem from "./TaskItem";
import TaskEntry from "./TaskEntry";
import useCustomReducer from "../../hook/useCustomReducer";
import taskListReducer from './taskListReducer';
import { v4 as uuidv4 } from 'uuid';

const initState = [
  { id: uuidv4(), title: "task 1", done: true },
  { id: uuidv4(), title: "task 2", done: false },
  { id: uuidv4(), title: "task 3", done: true },
];

export default function TaskListWithReducer() {
  // const [tasks, dispatch] = useReducer(taskListReducer, initState);
  const [tasks, dispatch] = useCustomReducer(taskListReducer, initState);

  // console.log("tasks ", tasks);

  const handleAddTask = addTask => {
    // console.log("onAdd from parent", addTask);
    const newOne = {
      id: uuidv4(),
      title: addTask,
      done: true,
    }
    dispatch({
      type: "ADD_TODO",
      payload: newOne,
    })
  }

  const handleEditTask = updateTask => {
    // console.log("onEdit from parent", updateTask);
    dispatch({
      type: "UPDATE_TODO",
      payload: updateTask,
    })
  }

  const handleDeleteTask = deleteTask => {
    // console.log("onDelete from parent", deleteTask);
    dispatch({
      type: "DELETE_TODO",
      payload: deleteTask,
    })
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
