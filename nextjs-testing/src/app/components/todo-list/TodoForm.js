import { Box, Button, TextField } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const toodSchema = yup
  .object({
    title: yup.string().required(),
  })
  .required()

export default function TodoForm({ onAddTodo }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(toodSchema),
    defaultValues: {
      title: '',
    },
  });
  const onSubmit = (data) => {
    onAddTodo(data.title); reset();
    document.activeElement?.blur();
  }

  return (
    <Box
      component="form"
      // noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 6,
        borderRadius: 6,
      }}
    >
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <TextField
            {...field}
            type='text'
            label="title"
            variant="filled"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ bgcolor: "forestgreen" }}
      >
        New
      </Button>
    </Box >
  )
}


