import { createContext, useState } from 'react';

export const FlyOutContext = createContext();

export default function FlyOut({ children }) {
  const [open, toggle] = useState(false);

  return (
    <FlyOutContext.Provider value={{ open, toggle }}>
      {children}
    </FlyOutContext.Provider>
  )
}
