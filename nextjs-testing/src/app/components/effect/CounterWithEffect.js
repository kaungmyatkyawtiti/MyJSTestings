import { useEffect, useRef, useState } from "react";

function Child() {
  console.log("render Child");
  return (
    <div>
      Child
    </div>
  )
}

export default function CounterWithEffect() {
  const counterRef = useRef(null);
  const [count, setCount] = useState(0);
  const [another, setAnother] = useState(0);

  console.log("render Counter", counterRef);
  
  useEffect(() => {
    console.log("useEffect run", counterRef);
  })

  const incHandler = () => {
    setCount(count + 1);
    // count++;
    console.log("counter ", count);
  }

  const incAnother = () => {
    setAnother(another + 1);
    console.log("another ", another);
  }

  return (
    <div ref={counterRef}>
      Counter {count}&nbsp;
      Double Counter {count * 2}&nbsp;
      <button type="button" onClick={incHandler}>&nbsp;+&nbsp;</button>&nbsp;
      <button type="button" onClick={incAnother}>&nbsp;Another inc&nbsp;</button>

      <Child />
    </div>
  )
}
