'use client';

import { dec, inc, selectCounter } from "@/lib/features/simplecounter/simpleCounterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function SimpleCounter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCounter);

  // console.log("Action", inc());
  const incHandler = () => {
    console.log("incHandler");
    dispatch(inc());
  }

  const decHandler = () => {
    console.log("decHandler");
    dispatch(dec());
  }

  return (
    <div>
      SimpleCounter {count}&nbsp;
      <button
        type="button"
        onClick={incHandler}>
        inc
      </button>
      <button
        type="button"
        onClick={decHandler}>
        dec
      </button>
    </div>
  )
}
