import { Box, Stack } from "@mui/material";
import MovieCard from "./MovieCard";
import { Movie } from "@/app/types/movies";
import MovieEntry from "./MovieEntry";

interface MovieUIProps {
  movies: Movie[];
}

export default async function MovieUI({
  movies
}: MovieUIProps) {

  return (
    <Box sx={{ p: 3 }}>

      {/* New Movie From Section */}
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
