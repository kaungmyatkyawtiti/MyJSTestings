import getMovieById from "@/app/api/MovieApi";
import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  Movie as MovieIcon,
  ArrowBack as ArrowBackIcon
} from "@mui/icons-material";
import MovieCard from "../components/MovieCard";

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
          <IconButton
            color="error"
            edge="start"
          >
            <ArrowBackIcon />
          </IconButton>
          <MovieIcon fontSize="large" color="action" />
          <Typography variant="h5" fontWeight={600} color="text.secondary">
            Movie Details
          </Typography>
        </Box>

        <Box position="relative">
          {/* <MovieCard movie={movie ?? {} as Movie} /> */}

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
          <Button
            variant="contained"
            size="small"
            sx={{ my: 2 }}
          >
            Edit
          </Button>

          {/* <ReviewBox id={id} /> */}
        </Box>
        {/* <MovieFormDialog */}
        {/*   open={open} */}
        {/*   onClose={handleClose} */}
        {/*   movieToEdit={movie} */}
        {/* /> */}
      </Box>
    </Box>
  )
}
