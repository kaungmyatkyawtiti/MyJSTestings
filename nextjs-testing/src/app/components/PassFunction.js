import { useState } from "react";

function ChildButton({ onCallback }) {
  return (
    <div>
      <button
        type="button"
        onClick={onCallback}>
        Inc
      </button>
    </div>
  )
}

export default function PassFunction() {
  let [count, setCount] = useState(0);

  const handleCallBack = () => {
    console.log("callback from parent");
    setCount(++count);
  }

  return (
    <div>
      Parent Counter: {count}
      <ChildButton onCallback={handleCallBack} />
    </div>
  )
}
