'use client';

import { useEffect, useState } from 'react'
import CustomCounter from './CustomCounter';

function useCustomWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default function CustomWidthShowDemo() {
  const width = useCustomWidth();

  return (
    <div>
      <p>Window width is {width}px</p>

      <CustomCounter />
    </div>
  )
}
