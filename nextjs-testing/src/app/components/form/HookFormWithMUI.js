import { useForm, Controller } from "react-hook-form"
import { Button, Grid, TextField } from "@mui/material";

export default function HookFormWithMUI() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      price: "",
      quantity: "",
    },
  })

  const onSubmitHandler = (data) => console.log(data);

  return (
    <div>
      React Hook Form MUI
      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller
              name="price"
              control={control}
              render={({ field }) => <TextField label="price" {...field} variant="filled" />}
            />
          </Grid>

          <Grid size={12}>
            <Controller
              name="quantity"
              control={control}
              render={({ field }) => <TextField label="quantity" {...field} variant="filled" />}
            />
          </Grid>

          <Grid size={12}>
            <Button type="submit" variant="outlined">Submit</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
