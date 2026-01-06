import { useContext, useReducer } from "react";
import taskListReducer from '../../reducer/task-list/taskListReducer';
import TaskListContext from "./TaskListContext";
import TaskListDispatcherContext from "./TaskListDispatcherContext";
import TaskListCount from "./TaskListCount";
import { v4 as uuidv4 } from 'uuid';
import TaskItem from './TaskItem';
import TaskEntry from './TaskEntry';

const initState = [
  { id: uuidv4(), title: "task 1", done: true },
  { id: uuidv4(), title: "task 2", done: false },
  { id: uuidv4(), title: "task 3", done: true },
];

function TaskList() {
  const tasks = useContext(TaskListContext);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "20px auto"
      }}>
      <TaskListCount />
      <br />

      <TaskEntry />
      <br />

      {
        tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task}
          />
        )
      }
    </div>
  )
}

export default function TaskListWithContextReducer() {
  const [tasks, dispatch] = useReducer(taskListReducer, initState);

  return (
    <TaskListContext.Provider value={tasks}>
      <TaskListDispatcherContext.Provider value={dispatch}>
        <TaskList />
      </TaskListDispatcherContext.Provider>
    </TaskListContext.Provider>
  )
}
