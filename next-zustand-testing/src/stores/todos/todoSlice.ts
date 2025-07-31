// import { produce } from "immer";
import { StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";
import { BoundSlice } from "../useBoundStore";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface TodoActions {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (todo: Todo) => void;
}

export type TodoSlice = TodoState & TodoActions;

export const defaultInitState: TodoState = {
  todos: [
    {
      id: 1,
      title: "Title 1",
      completed: true,
    },
    {
      id: 2,
      title: "Title 2",
      completed: false,
    },
  ]
}

// export const createTodoSlice: StateCreator<
//   TodoSlice
// > = (set) => ({
//   ...defaultInitState,
//   // addTodo
//   addTodo: (todo: Todo) => set(produce((state) => {
//     state.todos.push(todo)
//   })),
//   // deleteTodo
//   deleteTodo: (todoId: number) => set(produce((state) => {
//     state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId);
//   })),
//   // updateTodo
//   updateTodo: (updated: Todo) => set(produce((state) => {
//     const target = state.todos.find((todo: Todo) => todo.id === updated.id);
//     if (target) {
//       Object.assign(target, updated);
//     }
//
//     // const index = state.todos.findIndex((todo: Todo) => todo.id === updated.id);
//     // if (index !== -1) {
//     //   state.todos[index] = updated;
//     // }
//   })),
// })

export const createTodoSlice: StateCreator<
  BoundSlice,
  [["zustand/immer", never]],
  [],
  TodoSlice
> = (set) => ({
  ...defaultInitState,
  // addTodo
  addTodo: (todo: Todo) =>
    set((state) => {
      state.todos.push(todo)
    }),
  // deleteTodo
  deleteTodo: (todoId: number) =>
    set((state) => {
      state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId);
    }),
  // updateTodo
  updateTodo: (updated: Todo) =>
    set((state) => {
      const target = state.todos.find((todo: Todo) => todo.id === updated.id);
      if (target) {
        Object.assign(target, updated);
      }
    }),
})
