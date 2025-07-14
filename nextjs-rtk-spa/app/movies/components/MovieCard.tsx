import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Movie } from "../types/movies";
import { useRouter } from "next/navigation";

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const router = useRouter();

  const btnDetailHandler = () => {
    console.log("click");
    router.push(`/movies/${movie._id}`);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9698.jpeg"
          alt={movie.title}
          sx={{
            height: 180, // set height instead of width to keep aspect ratio
            objectFit: 'cover'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Directed by {movie.director.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {movie.year}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button
          type="button"
          size="small"
          onClick={btnDetailHandler}>
          Details
        </Button>
      </CardActions>
    </Card>
  )
}
