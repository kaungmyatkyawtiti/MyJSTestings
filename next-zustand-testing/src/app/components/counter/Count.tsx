import { useBoundStore } from "@/stores/useBoundStore";
import { Box } from "@mui/material";

export default function Count() {
  const count = useBoundStore(state => state.count);

  return (
    <Box>
      Count {count}
    </Box>
  )
}
