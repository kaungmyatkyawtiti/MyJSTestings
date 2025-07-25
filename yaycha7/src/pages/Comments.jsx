import { Box, Button, TextField } from "@mui/material";
import Item from "../components/Item";

export default function Comments() {
  return (
    <Box>
      <Item
        primary
        key={1}
        item={{
          id: 1,
          content: "Initial post content from Alice",
          name: "Alice",
        }}
        remove={() => { }} />

      <Item
        primary
        key={2}
        item={{
          id: 2,
          content: "A comment reply from Bob",
          name: "Bob",
        }}
        remove={() => { }} />

      <Item
        primary
        key={3}
        item={{
          id: 3,
          content: "A commment reply from Alice",
          name: "Alice",
        }}
        remove={() => { }} />

      <form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 3,
          }}>
          <TextField multiline placeholder="Your Comment" />
          <Button type="submit" variant="contained">reply</Button>
        </Box>
      </form>
    </Box>
  )
}
