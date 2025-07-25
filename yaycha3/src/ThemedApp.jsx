import { createContext, useContext, useMemo, useState } from "react";

import { CssBaseline, Snackbar, ThemeProvider, createTheme } from "@mui/material";

import App from "./App";
import { deepPurple, grey } from "@mui/material/colors";
import AppDrawer from "./components/AppDrawer";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export default function ThemedApp() {
  const [showDrawer, setShowDrawer] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [globalMsg, setGlobalMsg] = useState(null);
  const [auth, setAuth] = useState(null);
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        primary: deepPurple,
        banner: mode == "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        },
      },
    })
  }, [mode]);

  return (
    <ThemeProvider theme={theme} >
      <AppContext.Provider
        value={{
          showDrawer,
          setShowDrawer,
          showForm,
          setShowForm,
          globalMsg,
          setGlobalMsg,
          auth,
          setAuth,
          mode,
          setMode
        }}>

        <App />

        <AppDrawer />

        <Snackbar
          anchorOrigin={{
            horizontal: "center",
            vertical: "bottom",
          }}
          open={Boolean(globalMsg)}
          autoHideDuration={6000}
          onClose={() => setGlobalMsg(null)}
          message={globalMsg}
        />

        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  )
}
