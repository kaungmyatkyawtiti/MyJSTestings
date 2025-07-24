import { Box, Typography } from "@mui/material";
import MovieForm from "../components/MovieForm";

export default function NewMoviePage() {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 500,
        mx: "auto",
        my: 4,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        color="primary.main"
      >
        Add a New Movie
      </Typography>
      <MovieForm />
    </Box>
  )
}
