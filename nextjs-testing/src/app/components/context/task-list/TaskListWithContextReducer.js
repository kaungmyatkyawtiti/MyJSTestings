import { useContext, useReducer, useState } from "react";
import { taskListReducer } from "../../reducer/task-list/TaskListWithReducer";
import TaskListContext from "./TaskListContext";
import TaskListDispatcherContext from "./TaskListDispatcherContext";
import TaskListCount from "./TaskListCount";

let nextId = 3;

let initState = [
  { id: 1, title: "task 1", done: true },
  { id: 2, title: "task 2", done: false },
  { id: 3, title: "task 3", done: true },
];

function TaskList() {
  const tasks = useContext(TaskListContext);

  return (
    <div>
      <TaskListCount />
      <br />

      <TaskEntry />
      <br />

      {
        tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task} />
        )
      }
    </div>
  )
}

function newTask(title) {
  return {
    id: ++nextId,
    title,
    done: false,
  }
}

export function TaskEntry() {
  const dispatch = useContext(TaskListDispatcherContext);
  const [title, setTitle] = useState("");

  const onAddHandler = () => {
    // onAdd(task);
    const newOne = newTask(title);
    dispatch({
      type: "ADD_TODO",
      payload: newOne,
    })
    setTitle("");
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
      &nbsp;
      <button
        type="button"
        onClick={onAddHandler}>
        Add
      </button>
    </div>
  )
}

export function TaskItem({ task }) {
  const dispatch = useContext(TaskListDispatcherContext);
  const [title, setTitle] = useState(task.title);
  const [editing, setEditing] = useState(false);

  const onEditHandler = () => {
    setEditing(!editing);
    if (editing) {
      const updateTask = {
        ...task,
        title,
      }
      // console.log("updateTask ", updateTask);
      // onEdit(updateTask);
      dispatch({
        type: "UPDATE_TODO",
        payload: updateTask,
      })
    }
  }

  const onDeleteHandler = () => {
    // onDelete(task);
    dispatch({
      type: "DELETE_TODO",
      payload: task,
    })
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

export default function TaskListWithContextReducer() {
  const [tasks, dispatch] = useReducer(taskListReducer, initState);

  return (
    <div>
      <TaskListContext.Provider value={tasks}>
        <TaskListDispatcherContext.Provider value={dispatch}>
          <TaskList />
        </TaskListDispatcherContext.Provider>
      </TaskListContext.Provider>
    </div>
  )
}
