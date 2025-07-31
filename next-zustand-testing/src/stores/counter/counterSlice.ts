import { produce } from "immer";
import { StateCreator } from "zustand";

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

export const createCounterSlice: StateCreator<
  CounterSlice
> = (set) => ({
  ...defaultInitState,
  dec: () => set(produce((state: CounterState) => {
    state.count--
  })),
  inc: () => set(produce((state: CounterState) => {
    state.count++
  }))
});
