import { useState } from "react";

function Child() {
  console.log("render Child");
  return (
    <div>
      Child
    </div>
  )
}

export default function Counter() {
  let [count, setCount] = useState(0);
  let [another, setAnother] = useState(0);

  const incHandler = () => {
    setCount(++count);
    // count++;
    console.log("counter ", count);
  }

  const incAnother = () => {
    setAnother(++another);
    console.log("another ", another);
  }

  console.log("render Counter");

  return (
    <div>
      Counter {count}&nbsp;
      Double Counter {count * 2}&nbsp;
      <button type="button" onClick={incHandler}>&nbsp;+&nbsp;</button>&nbsp;
      <button type="button" onClick={incAnother}>&nbsp;Another inc&nbsp;</button>

      <Child />
    </div>
  )
}
