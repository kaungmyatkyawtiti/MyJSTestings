// import { produce } from "immer";
import { StateCreator } from "zustand";
import { BoundStore } from "../useBoundStore";

export interface CounterState {
  count: number;
}

export interface CounterActions {
  dec: () => void;
  inc: () => void;
  reset: () => void;
}

export type CounterSlice = CounterState & CounterActions

export const initState: CounterState = {
  count: 0
}

export const createCounterSlice: StateCreator<
  BoundStore,
  [["zustand/immer", never], ["zustand/devtools", never]],
  [],
  CounterSlice
> = (set) => ({
  ...initState,
  dec: () =>
    set((state) => { state.count-- },
      undefined,
      "count/dec"
    ),
  inc: () =>
    set((state) => { state.count++ },
      undefined,
      "count/inc"
    ),
  reset: () =>
    set((state) => { state.count = initState.count },
      undefined,
      "count/reset"
    ),
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
