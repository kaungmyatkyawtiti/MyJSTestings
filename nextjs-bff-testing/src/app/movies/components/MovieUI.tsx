import { Box, Stack } from "@mui/material";
import MovieCard from "./MovieCard";
import { Movie } from "@/app/types/movies";

interface MovieUIProps {
  movies: Movie[];
}

export default async function MovieUI({
  movies
}: MovieUIProps) {

  return (
    <Box sx={{ py: 3 }}>
      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center" // or "center" 
      >
        {
          movies.map(movie => <MovieCard
            key={movie._id}
            movie={movie}
            showDeleteButton={true}
            linkToDetail={true}
          />
          )
        }
      </Stack>
    </Box>
  )
}
