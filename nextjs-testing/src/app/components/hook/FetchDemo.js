import useFetch from "./useFetch";

export default function FetchDemo() {
  const [loading, todos] = useFetch("https://jsonplaceholder.typicode.com/todos");

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
