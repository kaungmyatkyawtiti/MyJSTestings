import { useState } from 'react';

export default function TaskEntry({ onAdd }) {
  const [task, setTask] = useState("");

  const onAddHandler = () => {
    onAdd(task);
    setTask("");
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAddHandler();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onKeyDown={handleKeyDown}
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
