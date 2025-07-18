'use client';

import { Box, Stack } from "@mui/material"
import { Movie } from "../types/movies"
import InteractiveMovieCard from "./InteractiveMovieCard"
import MovieEntry from "./MovieEntry";

interface MovieListProps {
  movies: Movie[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <Box sx={{ p: 3 }}>

      {/* New Mvoie From Section */}
      <MovieEntry />

      {/* Movie Cards Section */}
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center" // or "center" 
      >
        {
          movies.map(movie => <InteractiveMovieCard key={movie._id} movie={movie} />
          )
        }
      </Stack>
    </Box>
  )
}
