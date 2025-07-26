// import { createMovie } from "@/app/lib/actions";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Grid,
//   TextField,
// } from "@mui/material";
// import { useActionState, useEffect } from "react";
//
// interface MovieFormDialogProps {
//   open: boolean;
//   onClose: () => void;
// }
//
// export default function MovieFormDialog({
//   open,
//   onClose,
// }: MovieFormDialogProps) {
//
//   const [state, createMovieAction, pending] = useActionState(createMovie, undefined);
//
//   useEffect(() => {
//     if (!pending && state && !state.errors) {
//       onClose(); // Close the dialog if no errors
//     }
//   }, [state, pending, onClose]);
//
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       scroll="paper"
//       slotProps={{
//         paper: {
//           sx: {
//             maxHeight: '90vh',
//             width: '100%',
//             maxWidth: 500,
//           },
//         },
//       }}
//     >
//       <DialogTitle>
//         New Movie
//       </DialogTitle>
//       <DialogContent sx={{ paddingBottom: 0 }}>
//         <DialogContentText>
//           Add a new movie by entering its title, director, and release year.
//         </DialogContentText>
//         <form key={open ? 'open' : 'closed'} action={createMovieAction}>
//           <Grid container spacing={2}>
//             <Grid size={12}>
//               <TextField
//                 name="title"
//                 margin="dense"
//                 disabled={pending}
//                 fullWidth
//                 variant="standard"
//                 label="Title"
//                 error={!!state?.errors?.title}
//                 helperText={state?.errors?.title?.[0]}
//               />
//             </Grid>
//             <Grid size={12}>
//               <TextField
//                 name="directorName"
//                 margin="dense"
//                 disabled={pending}
//                 fullWidth
//                 variant="standard"
//                 label="Director name"
//                 error={!!state?.errors?.directorName}
//                 helperText={state?.errors?.directorName?.[0]}
//               />
//             </Grid>
//             <Grid size={12}>
//               <TextField
//                 name="directorPhoneNo"
//                 margin="dense"
//                 disabled={pending}
//                 fullWidth
//                 variant="standard"
//                 label="Director phoneNo"
//                 error={!!state?.errors?.directorPhoneNo}
//                 helperText={state?.errors?.directorPhoneNo?.[0]}
//               />
//             </Grid>
//
//             <Grid size={12}>
//               <TextField
//                 name="year"
//                 margin="dense"
//                 disabled={pending}
//                 fullWidth
//                 variant="standard"
//                 label="Year"
//                 error={!!state?.errors?.year}
//                 helperText={state?.errors?.year?.[0]}
//               />
//             </Grid>
//           </Grid>
//           <DialogActions>
//             <Button onClick={onClose}>Cancel</Button>
//             <Button type="submit">Save</Button>
//           </DialogActions>
//         </form>
//
//       </DialogContent>
//     </Dialog>
//   )
// }



import { saveMovieAction } from "@/app/lib/movieActions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useActionState, useEffect } from "react";

interface MovieFormDialogProps {
  open: boolean;
  onClose: () => void;
}

// Extracted form component with own useActionState
function MovieForm({ onClose }: { onClose: () => void }) {
  const [state, createMovieAction, pending] = useActionState(saveMovieAction, undefined);

  useEffect(() => {
    if (!pending && state && !state.errors) {
      onClose(); // Close only on successful submission
    }
  }, [state, pending, onClose]);

  return (
    <form action={createMovieAction}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <TextField
            name="title"
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Title"
            error={!!state?.errors?.title}
            helperText={state?.errors?.title?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            name="directorName"
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Director name"
            error={!!state?.errors?.directorName}
            helperText={state?.errors?.directorName?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            name="directorPhoneNo"
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Director phoneNo"
            error={!!state?.errors?.directorPhoneNo}
            helperText={state?.errors?.directorPhoneNo?.[0]}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            name="year"
            margin="dense"
            disabled={pending}
            fullWidth
            variant="standard"
            label="Year"
            error={!!state?.errors?.year}
            helperText={state?.errors?.year?.[0]}
          />
        </Grid>
      </Grid>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Save</Button>
      </DialogActions>
    </form>
  );
}

export default function MovieFormDialog({
  open,
  onClose,
}: MovieFormDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
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
        {/* 👇 This key forces remount and fresh state */}
        {
          open && <MovieForm key="form" onClose={onClose} />
        }
      </DialogContent>
    </Dialog>
  );
}
