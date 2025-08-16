import { useState } from 'react';
import App from './App';
import ThemedContext from './ThemedContext';
import ThemedLayout from './ThemedLayout';

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <ThemedContext.Provider value={{ mode }}>
      <ThemedLayout mode={mode} onModeChange={handleMode}>
        <App />
      </ThemedLayout>
    </ThemedContext.Provider >
  )
}
