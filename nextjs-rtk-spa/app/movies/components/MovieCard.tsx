'use client';

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Movie } from "../types/movies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationDialogRaw from "./ConfirmationDialogRaw";

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  const btnDetailHandler = () => {
    console.log("click");
    router.push(`/movies/${movie._id}`);
  }

  const btnDeleteHandler = () => {
    console.log("delete");
  }

  const [open, setOpen] = useState(false);

  const handleShowConfirmDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmHandler = () => {
    console.log("confirm");
  }

  const declineHandler = () => {
    console.log("decline");
  }

  return (
    <Box>
      <ConfirmationDialogRaw
        keepMounted
        open={open}
        message={"are you sure to delete?"}
        movieTitle={movie.title}
        onClose={handleClose}
        okCallback={confirmHandler}
        cancelCallback={declineHandler}
      />
      <Card sx={{ maxWidth: 345 }}>
        {/* Make CardActionArea clickable for entire card except buttons */}
        <CardActionArea onClick={btnDetailHandler} sx={{ cursor: 'pointer' }}>
          <CardMedia
            component="img"
            image="https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9698.jpeg"
            alt={movie.title}
            sx={{
              height: 180,
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{ mb: 1 }}
            >
              {movie.title}
            </Typography>

            <Typography variant="subtitle2" color="text.primary" sx={{ mb: 0.5 }}>
              Director: {movie.director.name}
            </Typography>

            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Contact: {movie.director.phoneNo}
            </Typography>

            <Typography variant="body2">
              Year: {movie.year}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
          <Stack direction="row" spacing={1}>
            <Button size="small" onClick={() => console.log("edit")}>Edit</Button>
            <Button
              size="small"
              color="error"
              onClick={handleShowConfirmDialog}>
              Delete
            </Button>
          </Stack>
        </CardActions>
      </Card>
    </Box>
  )
}
