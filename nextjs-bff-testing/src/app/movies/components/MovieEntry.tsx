import {
  Box,
  Button,
  Typography
} from "@mui/material";

import {
  Add as AddIcon
} from "@mui/icons-material";
import Link from "next/link";

export default function MovieEntry() {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 3,
      }}
    >
      <Typography variant="h6" fontWeight={500}>
        📽️ ReelBox
      </Typography>

      <Link
        href={`/movies/new`}
        style={{
          textDecoration: "none",
          color: "inherit"
        }}>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<AddIcon />}
        >
          New Movie
        </Button>
      </Link>
    </Box>
  )
}
