import { useState } from "react";

export default function TaskEntry({ onAdd }) {
  const [title, setTitle] = useState("");

  const onAddHandler = () => {
    onAdd(title);
    setTitle("");
  }

  const handleKeyDown = (e) => {
    // console.log(e.key);
    if (e.key === "Enter") {
      onAddHandler();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onKeyDown={handleKeyDown}
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
