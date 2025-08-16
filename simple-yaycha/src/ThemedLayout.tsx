import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ThemeLayoutProps {
  mode: string;
  onModeChange: () => void;
  children: React.ReactNode;
}

export default function ThemedLayout({
  mode,
  onModeChange,
  children
}: ThemeLayoutProps) {
  return (
    <div
      style={{
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        minHeight: "100vh",
      }}
    >
      <button
        onClick={onModeChange}
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
