// import { produce } from "immer";
import { StateCreator } from "zustand";
import { BoundStore } from "../useBoundStore";
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export interface TodoActions {
  loadAllTodos: () => void;
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

export type TodoSlice = TodoState & TodoActions;

export const defaultInitState: TodoState = {
  todos: [
    {
      id: uuidv4(),
      title: "Title 1",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Title 2",
      completed: false,
    },
  ]
}

export const createTodoSlice: StateCreator<
  BoundStore,
  [["zustand/immer", never], ["zustand/devtools", never]],
  [],
  TodoSlice
> = (set) => ({
  ...defaultInitState,
  // loadTodos
  loadAllTodos: async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await resp.json();

      set((state) => {
        state.todos = data;
      },
        undefined,
        "todos/loadTodos"
      );
    } catch (error) {
      console.log("Failed to load todos:", error);
    }
  },
  // addTodo
  addTodo: (todo: Todo) =>
    set((state) => {
      state.todos.unshift(todo)
    },
      undefined,
      "todos/addTodo"
    ),
  // deleteTodo
  deleteTodo: (todoId: string) =>
    set((state) => {
      const target = state.todos.findIndex(todo => todo.id === todoId);
      state.todos.splice(target, 1);
      // state.todos = state.todos.filter((todo: Todo) => todo.id !== todoId);
    },
      undefined,
      "todos/deleteTodo"
    ),
  // updateTodo
  updateTodo: (updated: Todo) =>
    set((state) => {
      const target = state.todos.find(todo => todo.id === updated.id);
      if (target) {
        Object.assign(target, updated);
      }
    },
      undefined,
      "todos/updateTodo"
    ),
})

// without immer middleware
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
