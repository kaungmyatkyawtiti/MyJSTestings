'use client';

import { useReducer } from "react";

interface CounterState {
  count: number
}

type CounterAction =
  | { type: "INC" }
  | { type: "DEC" }

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "DEC":
      return {
        ...state,
        count: state.count - 1
      }
    case "INC":
      return {
        ...state,
        count: state.count + 1
      }
    default:
      const _exhaustiveCheck: never = action; // 🔥 TypeScript error here
      throw new Error("Unhandled action");
  }
}

let initState: CounterState = {
  count: 0
}

function CounterWithReducer() {
  let [state, dispatch] = useReducer(counterReducer, initState);

  const incHandler = () => {
    dispatch({
      type: "INC"
    })
  }

  const decHandler = () => {
    dispatch({
      type: "DEC"
    })
  }

  return (
    <div>
      <div>{state.count}</div>
      <button
        type="button"
        onClick={incHandler}>
        Inc
      </button>
      <button
        type="button"
        onClick={decHandler}>
        Dec
      </button>

    </div >
  )
}

export default CounterWithReducer;
