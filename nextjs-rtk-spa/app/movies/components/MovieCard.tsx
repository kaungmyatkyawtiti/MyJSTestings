import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Movie } from "../types/movies";

interface MovieCardProps {
  movie: Movie,
  onDetailClick?: () => void;
  onDelete?: () => void;
}

export default function MovieCard({
  movie,
  onDetailClick,
  onDelete,
}: MovieCardProps) {

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {/* Make CardActionArea clickable for entire card except buttons */}
        <CardActionArea
          onClick={onDetailClick ? () => onDetailClick() : undefined}
          sx={{ cursor: !!onDetailClick ? 'pointer' : 'default' }}
        >
          <CardMedia
            component="img"
            image="https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9698.jpeg"
            alt={movie.title}
            sx={{
              height: 180,
              objectFit: 'cover',
            }}
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              noWrap
              sx={{ mb: 1 }}
            >
              {movie.title}
            </Typography>

            <Typography variant="subtitle2" color="text.primary" sx={{ mb: 0.5 }}>
              Director: {movie.director.name}
            </Typography>

            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Contact: {movie.director.phoneNo}
            </Typography>

            <Typography variant="body2">
              Year: {movie.year}
            </Typography>
          </CardContent>
        </CardActionArea>
        {
          !!onDelete &&
          <CardActions >
            <Stack direction="row" spacing={1}>
              <Button size="small" onClick={() => console.log("edit")}>Edit</Button>
              <Button
                size="small"
                color="error"
                onClick={onDelete}>
                Delete
              </Button>
            </Stack>
          </CardActions>
        }
      </Card>
    </div>
  )
}
