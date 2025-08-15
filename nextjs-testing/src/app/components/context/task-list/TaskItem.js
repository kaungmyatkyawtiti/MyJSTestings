import { useState, useContext } from 'react';
import TaskListDispatcherContext from './TaskListDispatcherContext';

export default function TaskItem({ task }) {
  const dispatch = useContext(TaskListDispatcherContext);
  const [title, setTitle] = useState(task.title);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
    if (editing) {
      const updateTask = {
        ...task,
        title,
      }
      // console.log("updateTask ", updateTask);
      dispatch({
        type: "UPDATE_TODO",
        payload: updateTask,
      })
    }
  }

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: task,
    })
  }

  const handleTextChange = (e) => {
    setTitle(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div>
      {
        editing
          ? <input type="text" value={title} onKeyDown={handleKeyDown} onChange={handleTextChange} />
          : title
      }
      &nbsp;
      <button
        type="button"
        onClick={handleEdit}>
        {
          !editing
            ? "Edit"
            : "Save"
        }
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}
