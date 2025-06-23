import { useState } from "react";

export function TaskEntry({ onAdd }) {
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
