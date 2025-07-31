"use client";

import { Box, Typography } from "@mui/material";
import { useBoundStore } from "@/stores/useBoundStore";
import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";

export default function TodoList() {
  const { todos } = useBoundStore();

  const deleteTodoHandler = () => {
    console.log("delete todo");
  };

  return (
    <Box sx={{ p: 2, maxWidth: 700, mx: "auto" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 3,
          fontWeight: 600
        }}
      >
        TodoList
      </Typography>

      <TodoInput />

      <Box>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onDeleteTodo={deleteTodoHandler}
          />
        ))}
      </Box>
    </Box>
  );
}
