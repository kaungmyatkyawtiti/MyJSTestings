import { create } from "zustand";
// import { CounterSlice, createCounterSlice } from "./counter/counterSlice";
import { createTodoSlice, TodoSlice } from "./todos/todoSlice";
import { immer } from "zustand/middleware/immer";

export type BoundSlice =
  TodoSlice;

// export const useBoundStore = create<BoundSlice>((...arg) => ({
//   ...createCounterSlice(...arg),
//   ...createTodoSlice(...arg),
// }))

export const useBoundStore = create<BoundSlice>()(
  immer((...args) => ({
    ...createTodoSlice(...args),
  }))
);
