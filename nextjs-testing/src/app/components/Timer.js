import { useEffect, useState } from "react"

export default function Timer() {
  const [now, setNow] = useState(null); // Don't initialize with `new Date()`

  useEffect(() => {
    // This only runs on the client
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div>
      {
        now
          ? now.toString()
          : "Loading..."
      }
    </div>
  );
}
