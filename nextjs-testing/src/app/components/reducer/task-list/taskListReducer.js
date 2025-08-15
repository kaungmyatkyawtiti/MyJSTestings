export default function taskListReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        action.payload,
        ...state
      ];
    }
    case "UPDATE_TODO": {
      return state.map(task =>
        task.id == action.payload.id
          ? action.payload
          : task
      );
    }
    case "DELETE_TODO": {
      return state.filter(task =>
        task.id !== action.payload.id
      );
    }
  }
}
