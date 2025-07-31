"use client";

import { Box, Button, TextField } from "@mui/material";

export default function TodoInput() {

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mb: 3,
        maxWidth: 600,
        mx: "auto",
        px: 1,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        label="Add your task"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "forestgreen",
          textTransform: "none"
        }}
      >
        Add
      </Button>
    </Box>
  );
}
