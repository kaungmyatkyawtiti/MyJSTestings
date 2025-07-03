import Todo from "./Todo";

type TodoListProp = {
  todos: Todo[]
}

export default function TodoList({ todos }: TodoListProp) {
  return (
    <div>
      TodoList Items
    </div>
  )
}
