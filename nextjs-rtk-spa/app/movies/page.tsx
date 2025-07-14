'use client';

import MovieList from "./components/MovieList";
import { Movie } from "./types/movies";

let movies: Movie[] = [
  {
    "_id": "684a964b5749dd65e7b29990",
    "title": "Inception 3",
    "director": {
      "name": "Christopher Nolan",
      "phoneNo": "123-456-7890",
      "_id": "684bcd34b758682478c9a5d7"
    },
    "year": 2019
  },
  {
    "_id": "684b1fd39bf638816f8e959d",
    "title": "Inception",
    "director": {
      "name": "Christopher Nolan",
      "phoneNo": "123-456-7890",
      "_id": "684b1fd39bf638816f8e959e"
    },
    "year": 2010,
  }
]

export default function Page() {
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
}
