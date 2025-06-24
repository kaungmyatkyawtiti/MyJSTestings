import { useContext } from "react"
import TaskListContext from "./TaskListContext"

export default function TaskListCount() {
  const tasks = useContext(TaskListContext);

  return (
    <div>
      <h3>Number of TaskList {tasks.length}</h3>
    </div>
  )
}
