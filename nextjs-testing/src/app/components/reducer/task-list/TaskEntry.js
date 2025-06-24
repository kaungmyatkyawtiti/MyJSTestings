import { useState } from "react";

export default function TaskEntry({ onAdd }) {
  const [title, setTitle] = useState("");

  const onAddHandler = () => {
    onAdd(title);
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
