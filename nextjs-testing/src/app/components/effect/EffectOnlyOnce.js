import { useEffect, useState } from "react"

export default function EffectOnlyOnce() {
  const [counter, setCounter] = useState(0);
  const [another, setAnother] = useState(0);

  console.log("render");

  useEffect(() => {
    console.log("Effect run");
  }, [another]);

  return (
    <div>
      {counter} &nbsp;
      <button
        type="button"
        onClick={() => setCounter(counter + 1)}>
        &nbsp;+&nbsp;
      </button>
      &nbsp;
      <button
        type="button"
        onClick={() => setAnother(another + 1)}>
        &nbsp;Add Another&nbsp;
      </button>
    </div>
  )
}
