import { selectAllCompletedTodo } from "@/lib/features/todo/todoSlice"
import { useAppSelector } from "@/lib/hooks";

export default function CompletedTodoListCount() {
  const completeTodos = useAppSelector(selectAllCompletedTodo);

  return (
    <div>
      CompletedTodoListCount: {completeTodos.length}
    </div>
  )
}
