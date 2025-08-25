import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

export interface TodoModel {
  id: string,
  title: string,
  completed: boolean,
}

export interface TodoState {
  todos: TodoModel[],
}

const initialState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      title: "Todo 1",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Todo 2",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Todo 3",
      completed: true,
    },
  ],
}

export const todoSlice = createAppSlice({
  name: "todo",
  initialState,
  reducers: (create) => ({
    addTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos.push(action.payload);
    }),
    updateTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos = state.todos.map(todo =>
        todo.id == action.payload.id
          ? action.payload
          : todo
      );
    }),
    deleteTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      // console.log("before delete", state.todos);
      state.todos = state.todos.filter(todo =>
        todo.id != action.payload.id
      );
      // console.log("after delete", state.todos);
    }),
    loadAllTodos: create.asyncThunk(
      async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        // console.log("data", data);
        return data;
      },
      {
        pending: (state) => {
          // state.status = "loading";
        },
        fulfilled: (state, action) => {
          console.log("payload", action.payload);
          state.todos = action.payload;
        },
        rejected: (state) => {
          // state.status = "failed";
        },
      },
    ),
  }),
  selectors: {
    selectTodo: state => state.todos,
    selectAllCompletedTodo: state => state.todos.filter(todo => todo.completed),
  }
})

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  loadAllTodos
} = todoSlice.actions;

export const {
  selectTodo,
  selectAllCompletedTodo
} = todoSlice.selectors;
