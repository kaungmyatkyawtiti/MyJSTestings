import { useState, createContext, useContext, useMemo } from "react";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { deepPurple, grey } from "@mui/material/colors";

import Template from "./Template.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Likes from "./pages/Likes.jsx";
import Profile from "./pages/Profile.jsx";
import Comments from "./pages/Comments.jsx";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/comments/:id",
        element: <Comments />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/likes/:id",
        element: <Likes />,
      },
    ]
  }
])

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
        banner: mode === "dark" ? grey[800] : grey[200],
        text: {
          fade: grey[500],
        }
      },
    })
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider
        value={{
          showDrawer, setShowDrawer,
          showForm, setShowForm,
          globalMsg, setGlobalMsg,
          auth, setAuth,
          mode, setMode
        }}>
        <RouterProvider router={router} />
        <CssBaseline />
      </AppContext.Provider>
    </ThemeProvider>
  );
}
