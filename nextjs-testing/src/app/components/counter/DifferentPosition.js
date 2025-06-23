import classNames from "classnames";
import { useState } from "react"

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  const counterClassName = classNames("counter", {
    "hover": hover
  })

  return (
    <div
      className={counterClassName}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h4>{person}'s score: {score}</h4>
      <button onClick={() => setScore(score + 1)}>
        Add
      </button>
    </div>
  )
}

export default function DifferentPosition() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {
        isPlayerA
          ? <Counter key={"key"} person={"eucalyptus"} />
          : <Counter key={"key"} person={"mxyzptlk"} />
      }
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player
      </button>
    </div >
  )
}
