"use client";

import { Card, Box, IconButton, CardContent, Typography } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { Todo } from "@/stores/todos/todoSlice";

interface TodoCardProps {
  todo: Todo;
  onDeleteTodo: () => void;
}

export default function TodoCard({ todo, onDeleteTodo }: TodoCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 1,
        maxWidth: 500,
        mx: "auto",
        boxShadow: "none",
        borderRadius: 2,
        borderColor: "#ddd",
        px: 1,
        py: 0.5,
        transition: "0.2s ease",
        "&:hover": {
          boxShadow: 1,
          borderColor: "#ccc",
          transform: "scale(1.01)",
        },
      }}
    >
      <CardContent sx={{
        py: 0.5,
        "&:last-child": { pb: 0.5 }
      }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem" }}
          >
            {todo.title}
          </Typography>
          <IconButton
            size="small"
            onClick={onDeleteTodo}
            sx={{ color: "indianred" }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
