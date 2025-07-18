'use client';

import { useGetAllMoviesQuery } from "@/lib/features/movie/moviesApiSlice";
import { useParams } from "next/navigation";
import MovieCard from "../components/MovieCard";
import Loading from "@/app/loading";
import { Box, Typography } from "@mui/material";
import {
  Movie as MovieIcon
} from "@mui/icons-material";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { movie } = useGetAllMoviesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      movie: data?.find(item => item._id === id),
    })
  })

  return (

    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={3}
      gap={2}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <MovieIcon fontSize="large" color="action" />
        <Typography
          variant="h5"
          fontWeight={600}
          color="text.secondary">
          Movie Details
        </Typography>
      </Box>
      {
        movie
          ? <MovieCard movie={movie} />
          : <Loading />
      }
    </Box>
  )
}
