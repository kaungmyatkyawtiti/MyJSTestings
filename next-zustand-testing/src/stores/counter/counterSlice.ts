// import { produce } from "immer";
import { StateCreator } from "zustand";
import { BoundSlice } from "../useBoundStore";

export interface CounterState {
  count: number;
}

export interface CounterActions {
  dec: () => void;
  inc: () => void;
}

export type CounterSlice = CounterState & CounterActions;

export const defaultInitState: CounterState = {
  count: 0,
}

// with immer middleware
export type ImmerStateCreator<C, T> = StateCreator<
  C,
  // [["zustand/immer", never], never],
  [["zustand/immer", never], ["zustand/devtools", never]],
  [],
  T
>;

export const createCounterSlice: ImmerStateCreator<
  BoundSlice,
  CounterSlice
> = (set) => ({
  ...defaultInitState,
  dec: () =>
    set(
      (state) => {
        state.count--
      },
      undefined,
      "count/dec"
    ),
  inc: () =>
    set(
      (state) => {
        state.count++
      },
      undefined,
      "count/inc"
    )
});

// export const useCounterStore = create<CounterStore>((set) => ({
//   ...defaultInitState,
//   // dec: () => set((state) => ({ count: state.count - 1 })),
//   // inc: () => set((state) => ({ count: state.count + 1 })),
//
//   // with immer
//   dec: () => set(produce((state: CounterState) => {
//     state.count--
//   })),
//   inc: () => set(produce((state: CounterState) => {
//     state.count++
//   }))
// }));

// with immer but not with immer middleware
// export const createCounterSlice: StateCreator<
//   CounterSlice
// > = (set) => ({
//   ...defaultInitState,
//   dec: () => set(produce((state: CounterState) => {
//     state.count--
//   })),
//   inc: () => set(produce((state: CounterState) => {
//     state.count++
//   }))
// });
