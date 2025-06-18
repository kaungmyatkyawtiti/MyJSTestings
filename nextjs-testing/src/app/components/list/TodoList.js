function TodoItem({ todo }) {
  return <li>{todo.title}</li>
}

export default function TodoList({ todos }) {
  console.log(todos);

  return (
    <div>
      TodoList
      <ul>
        {todos.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )}
      </ul>
    </div>
  )
}
