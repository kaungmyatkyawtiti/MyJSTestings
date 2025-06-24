import React, { useEffect, useState } from 'react'

function MyTimer() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    console.log("effect run");
    let timer = setInterval(() => {
      console.log("update time");
      setNow(new Date());
    }, 1000); 

    return () => {
      console.log("clean up");
      clearInterval(timer);
    }
  }, []);
  
  return (
    <div>
      Timer
      {
        now.toLocaleTimeString()
      }
    </div>
  )
}

export default function TimerWithCleanUp() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      {
        showTimer && <MyTimer />
      }

      <label>
        <input
          type="checkbox"
          checked={showTimer}
          onChange={e => {
            setShowTimer(e.target.checked);
          }}
        />
        Show
      </label>
    </div>
  )
}
