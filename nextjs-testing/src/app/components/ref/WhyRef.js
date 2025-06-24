import { useRef, useState } from "react"

export default function WhyRef() {
  const [counter, setCounter] = useState(0);
  // const [another, setAnother] = useState(0);
  const another = useRef(0);

  const incAnotherHandler = () => {
    another.current++;
    console.log(another);
  }

  console.log("render WhyRef", counter, another);
  return (
    <div>
      {counter}&nbsp;
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}>
        Add Counter
      </button>
      &nbsp;
      <button
        type="button"
        onClick={incAnotherHandler}>
        Inc Another
      </button>

    </div>
  )
}
