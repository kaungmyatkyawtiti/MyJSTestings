"use client";

import { NewTodo, Todo, useDeleteTodoByIdMutation, useGetAllTodosQuery, useSaveTodoMutation, useUpdateTodoByIdMutation } from "@/lib/features/todo-api/todoApiSlice"
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
  const [updateTodo, updateTodoResult] = useUpdateTodoByIdMutation();
  const [deleteTodo, deleteTodoResult] = useDeleteTodoByIdMutation();
  const [text, setText] = useState(todo.title);
  const [editing, setEditing] = useState(false);

  const onEditHandler = () => {
    setEditing(!editing);
    if (editing) {
      const updateTask: Todo = {
        ...todo,
        title: text
      }
      console.log('Update ', updateTask);
      updateTodo(updateTask);
    }
  }

  const onDeleteHandler = () => {
    deleteTodo(todo._id);
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

export function TaskEntry() {
  const [saveTodo, saveTodoResult] = useSaveTodoMutation();
  const [task, setTask] = useState('');

  const addHandler = () => {
    console.log('on add task ', task);
    let newTodo: NewTodo = {
      title: task,
      completed: false,
    }
    saveTodo(newTodo);
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

  console.log("api data", data);

  return (
    <div>
      TodoListWithRTKQuery
      <TaskEntry />
      {
        isLoading && <div>Loading...</div>
      }
      {
        isError && <div>Error loading todos. Please try again.</div>
      }
      {
        data && isSuccess && (
          data?.length === 0
            ? <p>No movies found.</p>
            : <TodoApiList todos={data} />
        )
      }
    </div>
  )
}
