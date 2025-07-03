"use client";

import { useState } from "react"
import { MouseEvent } from "react";

function OurCounter() {
  const [count, setCount] = useState(0);

  const incCountHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
  }

  return (
    <div>
      {count}&nbsp;
      <button
        type="button"
        onClick={incCountHandler}>
        Add
      </button>
    </div>
  )
}

export default OurCounter;
