import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()

export default function YupExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <Box
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 2 }}>
          <TextField
            {...register("firstName")}
            label="firstName"
            variant="standard"
            helperText={errors.firstName?.message}
          />
          {/* <p>{errors.firstName?.message}</p> */}
        </Box>

        <Box sx={{ my: 2 }}>
          <TextField
            {...register("age")}
            label="age"
            variant="standard"
            helperText={errors.age?.message}
          />
          {/* <p>{errors.age?.message}</p> */}
        </Box>

        <Box sx={{ my: 2 }}>
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
      </form>
    </Box>
  )
}
