import { Card, Box, IconButton, CardContent, Typography } from "@mui/material";
import {
  Delete as DeleteIcon
} from "@mui/icons-material";

export default function TodoCard({ todo, onDeleteTodo }) {
  return (
    <Card
      variant="outlined"
      sx={{ mb: 1 }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant='h6'>
            {todo.title}
          </Typography>
          <IconButton
            onClick={() => onDeleteTodo(todo)}>
            <DeleteIcon
              fontSize="inherit"
              sx={{ color: "indianred" }}
            />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}
