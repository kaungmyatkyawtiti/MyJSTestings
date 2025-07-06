'use client';

import { selectTodo } from "@/lib/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function TodoListWithRedux() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodo);

  return (
    <div>
      TodoListWithRedux
      {
        todos.map(todo => <div key={todo.id}>{todo.title}</div>)
      }
    </div>
  )
}
