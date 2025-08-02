"use client";

import { Box, Typography, AlertColor, IconButton } from "@mui/material";
import { useBoundStore } from "@/stores/useBoundStore";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";
import { useEffect } from "react";
import { useSnackbar } from "notistack";
import {
  Close as CloseIcon
} from '@mui/icons-material';

export type AlertState = {
  open: boolean;
  message: string;
  severity: AlertColor;
};

export default function TodoList() {
  const { todos, loadAllTodos } = useBoundStore();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showAlert = (
    message: string,
    severity: AlertColor = "info"
  ) => {
    enqueueSnackbar(message, {
      variant: severity,
      action: (key) => (
        <IconButton
          onClick={() => closeSnackbar(key)}
          sx={{ color: "white" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      ),
    });
  };

  useEffect(() => {
    loadAllTodos();
  }, [loadAllTodos]);

  return (
    <Box sx={{
      p: 2,
      maxWidth: 700,
      mx: "auto",
      position: "relative"
    }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 3,
          fontWeight: 500,
        }}
      >
        TodoList
      </Typography>

      <TodoInput showAlert={showAlert} />

      <Box>
        {
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              showAlert={showAlert} />
          ))
        }
      </Box>
    </Box>
  );
}
