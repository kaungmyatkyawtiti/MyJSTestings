"use client";

export default function CounterWithoutState() {
  let counter = 0;

  const incHandler = () => {
    counter++;
    console.log("counter ", counter);
  }
  console.log("render CounterWithoutState");
  return (
    <div>
      Counter {counter}&nbsp;
      <button type="button" onClick={incHandler}>+</button>
    </div>
  )
}
