const { createContext } = require("react");

const TaskListDispatcherContext = createContext({
  dispatch: null
});

export default TaskListDispatcherContext;
