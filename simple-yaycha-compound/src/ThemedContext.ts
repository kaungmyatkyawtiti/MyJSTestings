import { createContext } from 'react';

interface ThemedContextType {
  mode: string | null;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const iniModeState = {
  mode: null,
  setMode: () => { }
}

const ThemedContext = createContext<ThemedContextType>(iniModeState);

export default ThemedContext; 
