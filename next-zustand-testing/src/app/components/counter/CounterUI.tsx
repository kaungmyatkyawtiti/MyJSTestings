'use client';

import { Box, Button } from "@mui/material";
import Count from "./Count";
import { useBoundStore } from "@/stores/useBoundStore";

export default function CounterUI() {
  const { count, dec, inc } = useBoundStore();

  return (
    <Box>
      <Count />
      <Button
        variant="contained"
        onClick={inc}>
        inc
      </Button>
      <Button
        variant="contained"
        onClick={dec}>
        dec
      </Button>
    </Box>
  )
}
