import React, { useState } from 'react';
import ThemedContext from './ThemedContext';

interface ThemedWrapperProps {
  children: React.ReactNode;
}

export default function ThemedWrapper({ children }: ThemedWrapperProps) {
  const [mode, setMode] = useState("dark");

  return (
    <ThemedContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemedContext.Provider >
  )
}
