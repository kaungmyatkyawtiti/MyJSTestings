import { useForm, Controller } from "react-hook-form"
import { Button, Grid, TextField } from "@mui/material";

export default function HookFormWithMUI() {
  const {
    control,
    handleSubmit,
    reset,
    setValue,
  } = useForm({
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
            <Button type="submit" variant="outlined" onClick={() => reset()}>Reset</Button>
            <Button type="submit" variant="outlined" onClick={() => setValue("quantity", 100)}>Update</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}
