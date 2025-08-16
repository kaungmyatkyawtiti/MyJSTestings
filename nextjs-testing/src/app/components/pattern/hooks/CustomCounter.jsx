import { useState } from 'react'

function useCounter() {
  const [count, setCount] = useState(0);

  const incCounter = () => setCount(count + 1);

  const decCounter = () => setCount(count - 1);

  return { count, incCounter, decCounter };
}

export default function CustomCounter() {
  const counter = useCounter();

  return (
    <div>
      Counter {counter.count}

      <button
        type='button'
        onClick={counter.incCounter}>
        Inc
      </button>
      <button
        type='button'
        onClick={counter.decCounter}>
        Dec
      </button>
    </div>
  )
}
