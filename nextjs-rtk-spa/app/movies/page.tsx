'use client';

import { useGetAllMoviesQuery } from "@/lib/features/movie/moviesApiSlice";
import MovieList from "./components/MovieList";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import {
  Refresh as RefreshIcon
} from "@mui/icons-material";
import Loading from "../loading";

// let movies: Movie[] = [
//   {
//     "_id": "684a964b5749dd65e7b29990",
//     "title": "Inception 3",
//     "director": {
//       "name": "Christopher Nolan",
//       "phoneNo": "123-456-7890",
//       "_id": "684bcd34b758682478c9a5d7"
//     },
//     "year": 2019
//   },
//   {
//     "_id": "684b1fd39bf638816f8e959d",
//     "title": "Inception",
//     "director": {
//       "name": "Christopher Nolan",
//       "phoneNo": "123-456-7890",
//       "_id": "684b1fd39bf638816f8e959e"
//     },
//     "year": 2010,
//   }
// ]

export default function Page() {
  const { data, isError, isLoading, isSuccess, refetch, isFetching } = useGetAllMoviesQuery();
  // useGetAllMoviesQuery(undefined, {
  //   pollingInterval: 300000,
  //   skipPollingIfUnfocused: true,
  // });

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <div>Error loading todos. Please try again.</div>;
  }

  if (isSuccess && data?.length === 0) {
    return <p>No movies found.</p>;
  }

  const refreshHandler = () => {
    console.log("refresh");
    refetch();
  }
  console.log("data", data);

  return (
    <Box p={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" fontWeight="bold">
          🎬 My Movie Collections
        </Typography>
        <Button
          variant="outlined"
          size="small"
          startIcon={
            isFetching
              ? <CircularProgress size={16} color="inherit" />
              : <RefreshIcon />
          }
          onClick={refreshHandler}
          sx={{
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refresh'}
        </Button>
      </Stack>
      {
        data && <MovieList movies={data} />
      }
    </Box>
  )
}
