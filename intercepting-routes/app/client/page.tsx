"use client";

import { useEffect, useState } from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function ClientPage() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          // console.log("response", response);
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        console.log("json", json);
        setTodos(json);
      } catch (error) {
        if (error instanceof Error) {
          // console.log("error", error, "error.message", error.message);
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchTodo();
  }, []);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }

  return (
    <div>
      {
        todos && todos.map(todo =>
          <div key={todo.id}>
            {todo.title}
          </div>
        )
      }
    </div>
  )
}

