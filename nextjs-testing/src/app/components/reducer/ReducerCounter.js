import { useReducer } from "react";
import useCustomReducer from "../hook/useCustomReducer";

let initState = {
  counter: 0,
}

function counterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      }
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      }
    default:
      return state;
  }
}

export default function ReducerCounter() {
  // const [state, dispatch] = useReducer(counterReducer, initState);
  const [state, dispatch] = useCustomReducer(counterReducer, initState);

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
      Counter is {state.counter}&nbsp;

      <button
        type="button"
        onClick={incHandler}>
        &nbsp;+&nbsp;
      </button>&nbsp;
      <button
        type="button"
        onClick={decHandler}>
        &nbsp;-&nbsp;
      </button>
    </div>
  )
}
