import { useState } from "react"
import Counter from "./Counter.js";

export default function CounterConditional() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e =>
            setShowB(e.target.checked)
          }
        />
        Render the second counter
      </label>
    </div>
  )
}
