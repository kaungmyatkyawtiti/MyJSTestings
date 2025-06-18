'use client';
import { useState } from 'react';

export default function CounterBatchUpdate() {
  const [score, setScore] = useState(0);

  function increment() {
    //setScore(score + 1);
    setScore(score => score + 1);
  }

  return (
    <>
      <button onClick={() => increment()}>&nbsp;+1&nbsp;</button>&nbsp;
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>&nbsp;+3&nbsp;</button>
      <h1>Score: {score}</h1>
    </>
  )
}
