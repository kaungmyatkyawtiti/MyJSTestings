import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';
import {
  Close as CloseIcon,
  Add as AddIcon
} from '@mui/icons-material';

let initTodos = [
  {
    "id": 1,
    "title": "Todo 1",
  },
  {
    "id": 2,
    "title": "Todo 2",
  },
  {
    "id": 3,
    "title": "Todo 3",
  },
]

const nextId = () => {
  let id = 4;
  return () => ++id;
}

const unique = nextId();

export default function TodoList() {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(initTodos);

  const handleShowForm = () => {
    setShowForm(!showForm);
    document.activeElement?.blur();
  }

  const handleAddTodo = todo => {
    console.log("AddTodo in parent ", todo);

    let newTodos = [...todos, {
      id: unique(),
      title: todo
    }];
    setTodos(newTodos);
  }

  const handleDeleteTodo = todo => {
    console.log("deleteTodo in parent ", todo);

    let newTodos = todos.filter(item => item.id != todo.id);
    setTodos(newTodos);
  }

  return (
    <Box
      sx={{
        p: 2,
        maxWidth: 1000,
        margin: "20px auto"
      }}
    >
      {/* <Typography variant="h4">TodoList</Typography> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h3">Yaycha</Typography>
        <IconButton
          onClick={handleShowForm}
          sx={{
            backgroundColor: showForm ? "#dc3545" : "#0d6efd",
            color: "white",
            "&:hover": {
              backgroundColor: showForm ? "#bb2d3b" : "#0b5ed7",
            },
          }}
        >
          {
            showForm
              ? <CloseIcon />
              : <AddIcon />
          }
        </IconButton>
      </Box>

      <Box sx={{
        maxWidth: 500,
        margin: "20px auto"
      }}
      >
        {
          showForm && <TodoForm onAddTodo={handleAddTodo} />
        }

        {
          todos.map(todo =>
            <TodoCard
              key={todo.id}
              todo={todo}
              onDeleteTodo={handleDeleteTodo}
            />
          )
        }
      </Box>
    </Box>
  )
}
