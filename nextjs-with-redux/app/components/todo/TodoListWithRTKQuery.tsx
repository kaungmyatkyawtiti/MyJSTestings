"use client";

import { Todo, useGetTodosQuery } from "@/lib/features/todo-api/todoApiSlice"

type TodoListApiProp = {
  todos: Todo[],
}

export function TodoList({ todos }: TodoListApiProp) {
  return (
    <div>
      {
        todos.map(todo => <div key={todo._id}>{todo.title}</div>)
      }
    </div>
  )
}

export default function TodoListWithRTKQuery() {
  const { data, isError, isLoading, isSuccess } = useGetTodosQuery();

  console.log("data", data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos. Please try again.</div>;
  }

  return (
    <div>
      TodoListWithRTKQuery
      {
        data && <TodoList todos={data.data} />
      }
      {
        !data && <p>No todos found.</p>
      }
    </div>
  )
}
