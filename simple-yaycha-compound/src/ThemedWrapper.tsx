import React, { useState } from 'react';
import ThemedContext from './ThemedContext';

interface ThemedAppProps {
  children: React.ReactNode;
}

export default function ThemedWrapper({ children }: ThemedAppProps) {
  const [mode, setMode] = useState("dark");

  return (
    <ThemedContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemedContext.Provider >
  )
}
