import { saveMovie } from "@/app/lib/actions";
import {
  Box,
  Button,
  Grid,
  TextField,
} from "@mui/material";

export default function MovieForm() {
  return (
    <form action={saveMovie}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            name="title"
            margin="dense"
            fullWidth
            variant="standard"
            label="Title"
          />
        </Grid>
        <Grid size={12}>
          <TextField
            name="directorName"
            margin="dense"
            fullWidth
            variant="standard"
            label="Director name"
          />
        </Grid>
        <Grid size={12}>
          <TextField
            name="directorPhoneNo"
            margin="dense"
            fullWidth
            variant="standard"
            label="Director phoneNo"
          />
        </Grid>

        <Grid size={12}>
          <TextField
            name="year"
            margin="dense"
            fullWidth
            variant="standard"
            label="Year"
          />
        </Grid>
      </Grid>

      <Box
        mt={3}
        display="flex"
        justifyContent="flex-end"
        gap={2}>
        <Button variant="outlined" color="error">Cancel</Button>
        <Button type="submit" variant="contained">Save</Button>
      </Box>
    </form>
  )
}
