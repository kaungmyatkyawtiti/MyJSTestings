import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import {
  Menu as MenuIcon,
  Add as AddIcon,
  LightMode as LightModeIcon
} from "@mui/icons-material";

import { useApp } from "../ThemedApp.jsx";

export default function Header() {
  const { showForm, setShowForm } = useApp();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start">
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1, ml: 2 }}>Yaycha</Typography>

        <Box>
          <IconButton
            color="inherit"
            onClick={() => setShowForm(!showForm)}>
            <AddIcon />
          </IconButton>

          <IconButton
            color="inherit"
            edge="end">
            <LightModeIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
