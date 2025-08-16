import useFetch from "./useFetch";

function Item({ todo }) {
  return <li>{todo.title}</li>;
}

export default function FetchDemo() {
  const [loading, todos] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div style={{ maxWidth: 800, margin: "20px auto" }}>
      <h3 style={{ textAlign: "center" }}>TodoList</h3>
      <ul>
        {
          loading
            ? <div style={{ textAlign: "center" }}>Is loading</div>
            : todos.map(todo => <Item key={todo.id} todo={todo} />)
        }
      </ul>
    </div>
  )
}
