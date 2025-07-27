import { Box, Typography } from "@mui/material";
import {
  Movie as MovieIcon,
} from "@mui/icons-material";
import MovieCard from "../components/MovieCard";
import { getMovieById } from "@/app/api/MovieApi";
import EditMovie from "../components/EditMovie";
import BackButton from "../components/BackButton";

interface MovieDetailsPageProps {
  params: Promise<{ id: string }>
}

export default async function MovieDetailPage({
  params
}: MovieDetailsPageProps) {

  const { id } = await params;
  console.log('Id ', id);
  const movie = await getMovieById(id);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={3}
      gap={2}
    >
      <Box position="relative" width="100%" maxWidth={600}>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <BackButton />
          <MovieIcon fontSize="large" color="action" />
          <Typography variant="h5" fontWeight={600} color="text.secondary">
            Movie Details
          </Typography>
        </Box>

        <Box position="relative">

          {
            movie
              ? (
                <MovieCard movie={movie} />
              )
              : (
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    textAlign: 'center',
                    py: 4
                  }}
                >
                  No movie found with ID: {id}
                </Typography>
              )
          }

          <EditMovie movie={movie} />

          {/* <ReviewBox id={id} /> */}
        </Box>
      </Box>
    </Box>
  )
}
