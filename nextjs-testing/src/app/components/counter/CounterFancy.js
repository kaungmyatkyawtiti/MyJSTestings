import classNames from 'classnames';
import { useState } from 'react';

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  // let className = 'counter';
  // if (hover) {
  //   className += ' hover';
  // }
  // if (isFancy) {
  //   className += ' fancy';
  // }

  const counterClassName = classNames({
    "counter": true,
    "hover": hover,
    "fancy": isFancy,
  })

  return (
    <div
      className={counterClassName}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

export default function CounterFancy() {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {
        isFancy
          ? (<Counter isFancy={true} />)
          : (<Counter isFancy={false} />)
      }
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
