import { useState } from 'react';

export default function TaskItem({
  task,
  onEdit,
  onDelete
}) {
  const [title, setTitle] = useState(task.title);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
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

  const handleDelete = () => {
    onDelete(task);
  }

  const handleTextChange = (e) => {
    setTitle(e.target.value);
  }

  return (
    <div>
      {
        editing
          ? <input type="text" value={title} onChange={handleTextChange} />
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
