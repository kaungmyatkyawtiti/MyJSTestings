import { useState } from "react"

export default function useCustomReducer(reducerFn, initState) {
  const [state, setState] = useState(initState);

  function dispatch(action) {
    const newState = reducerFn(state, action);
    setState(newState);
  }

  return [state, dispatch];
}
