import { AppThunk } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit"

export interface SimpleCounterState {
  count: number,
}

// initialState
const initialState: SimpleCounterState = {
  count: 0,
}

// slice 
export const simpleCounterSlice = createSlice({
  name: "simpleCounter",
  initialState,
  reducers: (create) => ({
    // increasement
    inc: create.reducer((state) => {
      // console.log("before inc", state.count);
      state.count += 1;
      // console.log("after inc", state.count);
    }),
    // decreasement
    dec: create.reducer((state) => {
      // console.log("before dec", state.count);
      state.count -= 1;
      // console.log("after dec", state.count);
    }),
  }),
  selectors: {
    selectCounter: state => state.count,
  }
})

// export actions
export const { inc, dec } = simpleCounterSlice.actions;

// export selectors
export const { selectCounter } = simpleCounterSlice.selectors;

export const incAmountAfterSecond =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      setTimeout(() => {
        console.log('Fired thunk');
        dispatch(inc())
      }, 1000);
    };
