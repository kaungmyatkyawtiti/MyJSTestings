import { Avatar, Box, Typography } from "@mui/material";
import Item from "../components/Item";
import { pink } from "@mui/material/colors";

export default function Profile() {
  return (
    <Box>
      <Box sx={{ bgcolor: "banner", height: 150, borderRadius: 4 }}></Box>
      <Box
        sx={{
          mb: 4,
          marginTop: "-60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: "center",
          gap: 1,
        }}>

        <Avatar sx={{ width: 100, height: 100, bgcolor: pink[500] }} />

        <Box sx={{ textAlign: "center" }}>
          <Typography>Alice</Typography>
          <Typography sx={{ fontSize: "0.8em", color: "text.faade" }}>
            Alice's profile bio content here
          </Typography>
        </Box>
      </Box>

      <Item
        key={1}
        remove={() => { }}
        item={{
          id: 1,
          content: "A post content from Alice",
          name: "Alice",
        }}
      />
    </Box >
  )
}
