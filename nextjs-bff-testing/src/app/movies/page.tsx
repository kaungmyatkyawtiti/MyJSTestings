import MovieUI from "./components/MovieUI";
import { Box, Stack, Typography } from "@mui/material";
import { getAllMovies } from "../api/MovieApi";

export default async function MoviePage() {
  const movies = await getAllMovies();
  console.log(movies);

  if (!movies || movies.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        color="textSecondary">
        No movies found.
      </Typography>
    )
  }

  return (
    <Box p={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" fontWeight="bold">
          🎬 My Movie Collections
        </Typography>

        {/* <Button */}
        {/*   variant="outlined" */}
        {/*   size="small" */}
        {/*   startIcon={ */}
        {/*     isFetching */}
        {/*       ? <CircularProgress size={16} color="inherit" /> */}
        {/*       : <RefreshIcon /> */}
        {/*   } */}
        {/*   onClick={refreshHandler} */}
        {/*   sx={{ */}
        {/*     textTransform: 'none', */}
        {/*     fontWeight: 500, */}
        {/*   }} */}
        {/* > */}
        {/*   { */}
        {/*     isFetching */}
        {/*       ? 'Refreshing...' */}
        {/*       : 'Refresh' */}
        {/*   } */}
        {/* </Button> */}

      </Stack>

      <MovieUI movies={movies} />
    </Box>
  )
}
