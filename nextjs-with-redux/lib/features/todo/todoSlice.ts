import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { stat } from "fs";

export interface TodoModel {
  id: number,
  title: string,
  completed: boolean,
}

export interface TodoState {
  todos: TodoModel[],
}

const initialState: TodoState = {
  todos: [
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: true,
    },
  ],
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: (create) => ({
    addTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos.push(action.payload);
    }),
    deleteTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      // console.log("before delete", state.todos);
      state.todos = state.todos.filter(todo => todo.id != action.payload.id);
      // console.log("after delete", state.todos);
    }),
    updateTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos = state.todos.map(todo => todo.id == action.payload.id ? action.payload : todo);
    }),
  }),
  selectors: {
    selectTodo: state => state.todos,
  }
})

export const { addTodo } = todoSlice.actions;

export const { selectTodo } = todoSlice.selectors;
