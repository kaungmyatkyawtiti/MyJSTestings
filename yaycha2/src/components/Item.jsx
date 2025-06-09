import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";

import {
  Alarm as TimeIcon,
  Delete as DeleteIcon,
  AccountCircle as UserIcon,
} from "@mui/icons-material";
import { green, red } from "@mui/material/colors";

export default function Item({ item, remove }) {
  return (
    <Card sx={{ mb: 2 }} >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}>
            <TimeIcon fontSize="10" color="success" />
            <Typography
              variant="caption"
              sx={{ color: green[500] }}>
              A few second ago
            </Typography>
          </Box>

          <IconButton
            size="small"
            onClick={() => remove(item.id)}>
            <DeleteIcon
              fontSize="inherit"
              sx={{ color: red[500] }} />
          </IconButton>

        </Box>

        <Typography sx={{ my: 3 }}>{item.content}</Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}>
          <UserIcon
            fontSize="13"
            color="info" />
          <Typography variant="caption">{item.name}</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
