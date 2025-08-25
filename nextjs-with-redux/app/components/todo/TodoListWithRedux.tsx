'use client';

import { addTodo, deleteTodo, loadAllTodos, selectAllCompletedTodo, selectTodo, TodoModel, updateTodo } from "@/lib/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import CompletedTodoListCount from "./CompletedTodoListCount";
import { v4 as uuidv4 } from 'uuid';

type TodoListProp = {
  todo: TodoModel
}

function handleEnterKey(
  e: React.KeyboardEvent<HTMLInputElement>,
  callback: () => void
) {
  if (e.key === "Enter") {
    callback();
  }
}

function TaskItem({ todo }: TodoListProp) {
  const dispatch = useAppDispatch();
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

export function TaskEntry() {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState('');

  const addHandler = () => {
    console.log('on add task ', task);
    let newTodo: TodoModel = {
      id: uuidv4(),
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

export default function TodoListWithRedux() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodo);

  useEffect(() => {
    dispatch(loadAllTodos());
  }, []);

  return (
    <div>
      <CompletedTodoListCount />
      <TaskEntry />
      {
        todos.map(todo => <TaskItem key={todo.id} todo={todo} />)
      }
    </div>
  )
}
