import { saveMovieAction } from "@/app/lib/movieActions";
import { Resolver, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Movie } from "@/app/types/movies";
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
import { useActionState, useEffect } from "react";
import { MovieFormValue, movieSchema } from "@/app/schema/movieSchema";

interface MovieFormDialogProps {
  open: boolean;
  onClose: () => void;
  movieToEdit?: Movie;
}

interface MovieFormProps {
  onClose: () => void;
  movieToEdit?: Movie;
}

// Extracted form component with own useActionState
function MovieForm({
  onClose,
  movieToEdit,
}: MovieFormProps) {

  const {
    register,
    handleSubmit,
    control
  } = useForm<MovieFormValue>({
    // resolver: zodResolver(movieSchema),
    resolver: zodResolver(movieSchema) as Resolver<MovieFormValue>,
    defaultValues: {
      title: movieToEdit?.title ?? "",
      directorName: movieToEdit?.director?.name ?? "",
      directorPhoneNo: movieToEdit?.director?.phoneNo ?? "",
      year: movieToEdit?.year ?? undefined,
    },
  });

  const [state, createMovieAction, pending] = useActionState(saveMovieAction, undefined);

  useEffect(() => {
    if (!pending && state && !state.errors) {
      onClose(); // Close only on successful submission
    }
  }, [state, pending, onClose]);

  return (
    <form action={createMovieAction}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            {...register("title")}
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Title"
            error={!!state?.errors?.title}
            helperText={state?.errors?.title?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            {...register("directorName")}
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Director name"
            error={!!state?.errors?.directorName}
            helperText={state?.errors?.directorName?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            {...register("directorPhoneNo")}
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Director phoneNo"
            error={!!state?.errors?.directorPhoneNo}
            helperText={state?.errors?.directorPhoneNo?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            {...register("year")}
            type="number"
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Year"
            error={!!state?.errors?.year}
            helperText={state?.errors?.year?.[0]}
          />
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </form>
  );
}

export default function MovieFormDialog({
  open,
  onClose,
  movieToEdit,
}: MovieFormDialogProps) {
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

        {
          movieToEdit
            ? "Edit Movie"
            : "New Movie"
        }
      </DialogTitle>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <DialogContentText>
          {
            movieToEdit
              ? "Update the movie's information."
              : "Add a new movie by entering its title, director, and release year."
          }
        </DialogContentText>
        {/* 👇 This key forces remount and fresh state */}
        {
          open && <MovieForm key="form" onClose={onClose} movieToEdit={movieToEdit} />
        }
      </DialogContent>
    </Dialog>
  );
}
