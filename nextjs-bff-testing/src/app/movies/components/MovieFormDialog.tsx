import { createMovie } from "@/app/lib/actions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useActionState } from "react";

interface MovieFormDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function MovieFormDialog({
  open,
  onClose,
}: MovieFormDialogProps) {

  const [state, createMovieAction, pending] = useActionState(createMovie, undefined);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="paper"
      slotProps={{
        paper: {
          sx: {
            maxHeight: '90vh',
            width: '100%',
            maxWidth: 500,
          },
        },
      }}
    >
      <DialogTitle>
        New Movie
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <DialogContentText>
          Add a new movie by entering its title, director, and release year.
        </DialogContentText>
        <form action={createMovieAction}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <TextField
                name="title"
                margin="dense"
                disabled={pending}
                fullWidth
                variant="standard"
                label="Title"
                error={!!state?.errors?.title}
                helperText={state?.errors?.title}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                name="directorName"
                margin="dense"
                disabled={pending}
                fullWidth
                variant="standard"
                label="Director name"
                error={!!state?.errors?.directorName}
                helperText={state?.errors?.directorName}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                name="directorPhoneNo"
                margin="dense"
                disabled={pending}
                fullWidth
                variant="standard"
                label="Director phoneNo"
                error={!!state?.errors?.directorPhoneNo}
                helperText={state?.errors?.directorPhoneNo}
              />
            </Grid>

            <Grid size={12}>
              <TextField
                name="year"
                margin="dense"
                disabled={pending}
                fullWidth
                variant="standard"
                label="Year"
                error={!!state?.errors?.year}
                helperText={state?.errors?.year}
              />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>

      </DialogContent>
    </Dialog>
  )
}
