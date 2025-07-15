'use client';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography
} from "@mui/material";

import {
  Add as AddIcon
} from "@mui/icons-material";

import { useState } from "react"

import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { InferType } from "yup";

export default function MovieEntry() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const movieSchema = yup
    .object({
      title: yup.string().required("movie title is required"),
      director: yup.object({
        name: yup.string().required("director name is required"),
        phoneNo: yup.string().required("director phoneNo is required")
      }),
      year: yup.number().positive().integer().required("movie release year is required"),
    })
    .required()

  type MovieFormData = InferType<typeof movieSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MovieFormData>({
    resolver: yupResolver(movieSchema),
  })

  const onSubmit = (data: MovieFormData) => {
    console.log(data);
    handleClose();
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3 // margin-bottom for spacing below
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        🎬 My Movies
      </Typography>
      <Button
        variant="contained"
        color="success"
        size="small"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        New Movie
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll="paper"
        slotProps={{
          paper: {
            sx: {
              maxHeight: '90vh',
              width: '100%',
              maxWidth: 500,
            },
          },
        }}
      >
        <DialogTitle>New Movie</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <DialogContentText>
            Add a new movie by entering its title, director, and release year.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  fullWidth
                  variant="standard"
                  label="Title"
                  {...register("title")}
                  helperText={errors.title?.message}
                  error={!!errors.title}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  fullWidth
                  variant="standard"
                  label="Director name"
                  {...register("director.name")}
                  helperText={errors.director?.name?.message}
                  error={!!errors.director?.name}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  fullWidth
                  variant="standard"
                  label="Director phoneNo"
                  {...register("director.phoneNo")}
                  helperText={errors.director?.phoneNo?.message}
                  error={!!errors.director?.phoneNo}
                />
              </Grid>

              <Grid size={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  fullWidth
                  variant="standard"
                  label="Year"
                  {...register("year")}
                  helperText={errors.year?.message}
                  error={!!errors.year}
                />
              </Grid>
            </Grid>
            {/* <p>{errors.firstName?.message}</p> */}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Save</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
