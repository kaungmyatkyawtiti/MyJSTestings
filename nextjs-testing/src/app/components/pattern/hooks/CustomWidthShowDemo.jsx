'use client';

import { useEffect, useState } from 'react'
import CustomCounter from './CustomCounter';

function useCustomWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function CustomWidhtShowDemo() {
  const width = useCustomWidth();

  return (
    <div>
      <p>Window width is {width}px</p>

      <CustomCounter />
    </div>
  )
}
