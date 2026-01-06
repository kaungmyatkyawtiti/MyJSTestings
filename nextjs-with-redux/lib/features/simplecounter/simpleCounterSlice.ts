import { createAppSlice } from '@/lib/createAppSlice';
import { AppThunk } from "@/lib/store";
import { PayloadAction } from "@reduxjs/toolkit"

export interface SimpleCounterState {
  count: number,
}

// initialState
const initialState: SimpleCounterState = {
  count: 0,
}

// slice 
export const simpleCounterSlice = createAppSlice({
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
    incByAmount: create.reducer((state, action: PayloadAction<number>) => {
      state.count += action.payload;
    }),
    incAfterOneSecond: create.asyncThunk(
      async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Fired thunk");
        return amount;
      },
      {
        pending: (state) => {
        },
        fulfilled: (state, action) => {
          state.count += action.payload;
        },
        rejected: (state) => {
        },
      },
    )
  }),
  selectors: {
    selectCounter: state => state.count,
  }
})

// export actions
export const {
  inc,
  dec,
  incByAmount,
  incAfterOneSecond
} = simpleCounterSlice.actions;

// export selectors
export const { selectCounter } = simpleCounterSlice.selectors;

export const incAmountAfterSecond =
  (amount: number): AppThunk =>
    (dispatch, getState) => {
      setTimeout(() => {
        console.log('Fired thunk');
        dispatch(incByAmount(amount));
      }, 1000);
    };
