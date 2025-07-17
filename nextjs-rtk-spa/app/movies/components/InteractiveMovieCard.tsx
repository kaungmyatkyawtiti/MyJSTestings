'use client';

import { Box } from "@mui/material";
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

  const handleDetailClick = (movie: Movie) => {
    console.log("click");
    router.push(`/movies/${movie._id}`);
  }

  const handleDelete = (movie: Movie) => {
    handleShowConfirmDialog();
    console.log("movie", movie);
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
