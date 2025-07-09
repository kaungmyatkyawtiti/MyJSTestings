"use client";

import { Todo, useGetAllTodosQuery } from "@/lib/features/todo-api/todoApiSlice"
import { useState } from "react";

type TodoListApiProp = {
  todos: Todo[],
}

type TodoItemProp = {
  todo: Todo,
}

function handleEnterKey(
  e: React.KeyboardEvent<HTMLInputElement>,
  callback: () => void
) {
  if (e.key === "Enter") {
    callback();
  }
}

function TaskItem({ todo }: TodoItemProp) {
  // const dispatch = useAppDispatch();
  const [text, setText] = useState(todo.title);
  const [editing, setEditing] = useState(false);

  const onEditHandler = () => {
    setEditing(!editing);
    if (editing) {
      let updateTask = {
        ...todo,
        title: text
      }
      console.log('Update ', updateTask);
      dispatch(updateTodo(updateTask));
    }
  }

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo));
  }

  return (
    <div>
      {
        editing
          ? <input
            type={"text"}
            value={text}
            onKeyDown={(event) => handleEnterKey(event, onEditHandler)}
            onChange={(event) => setText(event.target.value)} />
          : text
      }
      &nbsp;
      <button
        type={"button"}
        onClick={onEditHandler}>
        {
          !editing
            ? 'Edit'
            : 'Save'
        }
      </button>
      &nbsp;
      <button
        type={"button"}
        onClick={onDeleteHandler}>
        Delete
      </button>
    </div>
  )
}

let id = 3;
export function TaskEntry() {
  // const dispatch = useAppDispatch();
  const [task, setTask] = useState('');

  const addHandler = () => {
    console.log('on add task ', task);
    let newTodo: TodoModel = {
      id: ++id,
      title: task,
      completed: false,
    }
    dispatch(addTodo(newTodo));
    setTask('');
  }

  return (
    <div>
      <input
        type={"text"}
        value={task}
        onKeyDown={(event) => handleEnterKey(event, addHandler)}
        onChange={(event) => setTask(event.target.value)} />
      &nbsp;
      <button
        type={"button"}
        onClick={addHandler}>
        Add
      </button>
    </div>
  );
}

function TodoApiList({ todos }: TodoListApiProp) {
  return (
    <div>
      {
        todos.map(todo => <TaskItem key={todo._id} todo={todo} />)
      }
    </div>
  )
}

export default function TodoListWithRTKQuery() {
  const { data, isError, isLoading, isSuccess } = useGetAllTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos. Please try again.</div>;
  }

  console.log("api data", data);

  return (
    <div>
      TodoListWithRTKQuery
      <TaskEntry />
      {
        data && <TodoApiList todos={data.data} />
      }
      {
        !data && <p>No todos found.</p>
      }
    </div>
  )
}
