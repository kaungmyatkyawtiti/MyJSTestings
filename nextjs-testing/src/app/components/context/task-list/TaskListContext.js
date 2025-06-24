const { createContext } = require("react");

const TaskListContext = createContext({
  tasks: [],
});

export default TaskListContext;
