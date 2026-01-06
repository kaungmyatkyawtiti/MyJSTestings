import { create } from "zustand";
import { CounterSlice, createCounterSlice } from "./counter/counterSlice";
import { createTodoSlice, TodoSlice } from "./todos/todoSlice";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

export type BoundStore =
  TodoSlice &
  CounterSlice;

// with immer middleware 
export const useBoundStore = create<BoundStore>()(
  devtools(
    immer((...args) => ({
      ...createTodoSlice(...args),
      ...createCounterSlice(...args),
    }))
  )
);

// without immer middleware
// export const useBoundStore = create<BoundSlice>((...arg) => ({
//   ...createCounterSlice(...arg),
//   ...createTodoSlice(...arg),
// }))

