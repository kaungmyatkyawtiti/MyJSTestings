import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField, Typography } from "@mui/material"
import { Movie } from "../types/movies"
import MovieCard from "./MovieCard"
import {
  Add as AddIcon
} from "@mui/icons-material"
import { useState } from "react"

interface MovieListProps {
  movies: Movie[]
}

const btnAddMovieHandler = () => {
  console.log("btn add movie");
}

export default function MovieList({ movies }: MovieListProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3 // margin-bottom for spacing below
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          🎬 My Movies
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          New Movie
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Movie</DialogTitle>
          <DialogContent sx={{ paddingBottom: 0 }}>
            <DialogContentText>
              Add a new movie by entering its title, director, and release year.
            </DialogContentText>
            <form onSubmit={handleSubmit}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </Box>

      {/* Movie Cards Section */}
      <Stack direction="row" spacing={2}>
        {
          movies.map(movie => <MovieCard key={movie._id} movie={movie} />
          )
        }
      </Stack>
    </Box>
  )
}
