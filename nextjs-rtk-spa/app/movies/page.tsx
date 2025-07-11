'use client';

import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const movies: string[] = ["Avatar", "Matrix", "Titanic"];
  const router = useRouter();

  const btnDetailHandler = (index: number) => {
    console.log("Go to movie", index);
    router.push(`/movies/${index}`);
  }

  return (
    <div>
      This is Movie Page
      {
        movies.map((movie, index) =>
          <Box key={index} sx={{ m: 1 }}>
            <Typography
              variant="overline"
              sx={{ mr: 1 }}>
              {movie}
            </Typography>
            <Button
              type="button"
              variant="outlined"
              size="small"
              onClick={() => btnDetailHandler(index)}>
              Detail
            </Button>
          </Box>
        )
      }
    </div>
  )
}
