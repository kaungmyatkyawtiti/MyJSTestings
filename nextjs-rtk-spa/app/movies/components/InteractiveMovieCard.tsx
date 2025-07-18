'use client';

import { Box } from "@mui/material";
import { Movie } from "../types/movies";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import MovieCard from "./MovieCard";
import { useDeleteMovieByIdMutation } from "@/lib/features/movie/moviesApiSlice";

interface InteractiveMovieCardProps {
  movie: Movie;
}

export default function InteractiveMovieCard({ movie }: InteractiveMovieCardProps) {
  const [deleteMovie, deleteMovieResult] = useDeleteMovieByIdMutation();

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

  const handleDeleteConfirm = (movieId: string) => {
    console.log("confirm and deleteId is", movieId);
    deleteMovie(movieId)
      .then(data => console.log("successfully deleted", data));
  }

  const handleDeleteDecline = () => {
    console.log("decline");
  }

  return (
    <Box>
      <ConfirmationDialog
        open={open}
        keepMounted={true}
        message={"are you sure to delete?"}
        movieTitle={movie.title}
        onClose={handleClose}
        onConfirm={() => handleDeleteConfirm(movie._id)}
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
