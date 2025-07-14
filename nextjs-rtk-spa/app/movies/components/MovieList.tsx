import { Box, Stack, Typography } from "@mui/material"
import { Movie } from "../types/movies"
import MovieCard from "./MovieCard"

interface MovieListProps {
  movies: Movie[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (

    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Movie List
      </Typography>

      <Stack direction="row" spacing={2}>
        {
          movies.map(movie => <MovieCard key={movie._id} movie={movie} />
          )
        }
      </Stack>
    </Box>
  )
}
