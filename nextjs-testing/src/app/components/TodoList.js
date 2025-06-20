import { Card, Box, IconButton, Button, CardContent, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Delete as DeleteIcon
} from "@mui/icons-material";

function Todo({ todo, deleteTodo }) {
  const onDeleteHandler = () => {
    console.log("todo ", todo);

    deleteTodo(todo);
  }

  return (
    <Card
      variant="outlined"
      sx={{ mb: 1 }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          {todo.title}
          <IconButton
            size="small"
            onClick={onDeleteHandler}>
            <DeleteIcon
              fontSize="inherit"
              sx={{ color: "indianred" }}
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

const toodSchema = yup
  .object({
    title: yup.string().required(),
  })
  .required()

function TodoInput({ addTodo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(toodSchema),
  });

  const onSubmit = (data) => {
    addTodo(data.title);
    reset();
  }

  return (
    <Box sx={{ my: 1 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ my: 1 }}>
          <TextField
            {...register("title")}
            label="title"
            variant="filled"
            helperText={errors.title?.message}
          />
          {/* <p>{errors.firstName?.message}</p> */}
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: "forestgreen" }}
        >New</Button>
      </form>
    </Box>
  )
}

const nextId = () => {
  let id = 4;
  return () => ++id;
}

const unique = nextId();

export default function TodoList() {
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

  const [todos, setTodos] = useState(initTodos);

  const addTodoHandler = todo => {
    console.log("AddTodo in parent ", todo);

    let newTodos = [...todos, {
      id: unique(),
      title: todo
    }];
    setTodos(newTodos);
  }

  const deleteTodoHandler = todo => {
    console.log("deleteTodo in parent ", todo);

    let newTodos = todos.filter(item => item.id != todo.id);
    setTodos(newTodos);
  }

  return (
    <Box sx={{ p: 2 }}>

      <Typography variant="h4">TodoList</Typography>

      <Box sx={{ minWidth: 200 }}>
        <TodoInput addTodo={addTodoHandler} />
        {
          todos.map(todo =>
            <Todo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodoHandler}
            />
          )
        }
      </Box>
    </Box>
  )
}
