'use client';

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Movie } from "../types/movies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import MovieCard from "./MovieCard";

interface InteractiveMovieCardProps {
  movie: Movie;
}

export default function InteractiveMovieCard({ movie }: InteractiveMovieCardProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleShowConfirmDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDetailClick = () => {
    console.log("click");
    router.push(`/movies/${movie._id}`);
  }

  const handleDelete = () => {
    handleShowConfirmDialog();
  }

  const handleDeleteConfirm = () => {
    console.log("confirm");
  }

  const handleDeleteDecline = () => {
    console.log("decline");
  }

  return (
    <Box>
      <ConfirmationDialog
        keepMounted
        open={open}
        message={"are you sure to delete?"}
        movieTitle={movie.title}
        onClose={handleClose}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteDecline}
      />
      <MovieCard
        movie={movie}
        // onShowConfirmDialog={handleShowConfirmDialog}
        onDetailClick={handleDetailClick}
        onDelete={handleDelete}
      />
    </Box>
  )
}
