import { useContext, useState } from 'react';
import TaskListDispatcherContext from './TaskListDispatcherContext';
import { v4 as uuidv4 } from 'uuid';

export default function TaskEntry() {
  const dispatch = useContext(TaskListDispatcherContext);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newOne = {
      id: uuidv4(),
      title,
      done: true,
    }
    dispatch({
      type: "ADD_TODO",
      payload: newOne,
    })
    setTitle("");
  }

  const handleSetTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onKeyDown={handleKeyDown}
        onChange={handleSetTitle} />
      &nbsp;
      <button
        type="button"
        onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}
