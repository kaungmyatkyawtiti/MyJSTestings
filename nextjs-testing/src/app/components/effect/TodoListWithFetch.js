import { useEffect, useState } from "react"

export default function TodoListWithFetch() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await resp.json();
        console.log("todos json ", json);
        setTodos(json);
      } catch (error) {
        console.log("todos fetch is failed ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      TodoList
      <ul>
        {
          todos.map(todo => <li key={todo.id}>{todo.title}</li>)
        }
      </ul>
    </div>
  )
}
