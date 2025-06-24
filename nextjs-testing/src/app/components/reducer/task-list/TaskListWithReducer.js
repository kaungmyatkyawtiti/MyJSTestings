import { useReducer } from "react";
import TaskItem from "./TaskItem";
import TaskEntry from "./TaskEntry";

let nextId = 3;

let initState = [
  { id: 1, title: "task 1", done: true },
  { id: 2, title: "task 2", done: false },
  { id: 3, title: "task 3", done: true },
];

export function taskListReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map(task => task.id == action.payload.id ? action.payload : task);
    case "DELETE_TODO":
      return state.filter(task => task.id !== action.payload.id);
  }
}

const newTask = title => (
  {
    id: ++nextId,
    title,
    done: true,
  }
)

export default function TaskListWithReducer() {
  const [tasks, dispatch] = useReducer(taskListReducer, initState);
  // console.log("tasks ", tasks);

  const addTaskHandler = addTask => {
    // console.log("onAdd from parent", addTask);
    const newOne = newTask(addTask);
    dispatch({
      type: "ADD_TODO",
      payload: newOne,
    })
  }

  const editTaskHandler = updateTask => {
    // console.log("onEdit from parent", updateTask);
    dispatch({
      type: "UPDATE_TODO",
      payload: updateTask,
    })
  }

  const deleteTaskHandler = deleteTask => {
    // console.log("onDelete from parent", deleteTask);
    dispatch({
      type: "DELETE_TODO",
      payload: deleteTask,
    })
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
            onEdit={editTaskHandler}
            onDelete={deleteTaskHandler} />
        )
      }
    </div>
  )
}
