import { useState } from "react";

export function TaskItem({ task, onEdit, onDelete }) {
  const [title, setTitle] = useState(task.title);
  const [editing, setEditing] = useState(false);

  const onEditHandler = () => {
    setEditing(!editing);
    if (editing) {
      const updateTask = {
        ...task,
        title,
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
