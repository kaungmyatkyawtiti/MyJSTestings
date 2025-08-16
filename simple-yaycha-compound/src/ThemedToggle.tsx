import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import ThemedContext from './ThemedContext';

interface ThemeLayoutProps {
  children: React.ReactNode;
}

export default function ThemedToggle({
  children
}: ThemeLayoutProps) {
  const { mode, setMode } = useContext(ThemedContext);

  const handleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  return (
    <div
      style={{
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={handleMode}
        style={{
          margin: 8,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "none",
          background: mode === "dark" ? "#121212" : "#f5f5f5",
          color: mode === "dark" ? "white" : "black",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon
          icon={
            mode === "dark"
              ? faSun
              : faMoon
          }
          size="lg"
        />
      </button>
      {children}
    </div>
  );
}
