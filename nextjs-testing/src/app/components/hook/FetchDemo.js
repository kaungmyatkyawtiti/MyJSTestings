import { useEffect, useState } from "react"
import UseFetch from "./UseFetch";

export default function FetchDemo() {
  const [loading, todos] = UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      TodoList
      <ul>
        {
          loading
            ? <h3>Is loading</h3>
            : todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
    </div>
  )
}
