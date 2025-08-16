import { useRef, useState } from "react"

export default function WhyRef() {
  const [counter, setCounter] = useState(0);
  // const [another, setAnother] = useState(0);

  const another = useRef(0);

  const handleAnotherInc = () => {
    another.current++;
    console.log(another);
  }

  const handleCounterInc = () => {
    setCounter(counter + 1);
  }
  console.log("render WhyRef", counter, another);

  return (
    <div>
      {counter}&nbsp;
      <button
        type="button"
        onClick={handleCounterInc}>
        Add Counter
      </button>
      &nbsp;
      <button
        type="button"
        onClick={handleAnotherInc}>
        Inc Another
      </button>

    </div>
  )
}
