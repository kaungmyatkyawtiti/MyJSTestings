'use client';

import { useGetAllMoviesQuery } from "@/lib/features/movie/moviesApiSlice";
import MovieList from "./components/MovieList";

// let movies: Movie[] = [
//   {
//     "_id": "684a964b5749dd65e7b29990",
//     "title": "Inception 3",
//     "director": {
//       "name": "Christopher Nolan",
//       "phoneNo": "123-456-7890",
//       "_id": "684bcd34b758682478c9a5d7"
//     },
//     "year": 2019
//   },
//   {
//     "_id": "684b1fd39bf638816f8e959d",
//     "title": "Inception",
//     "director": {
//       "name": "Christopher Nolan",
//       "phoneNo": "123-456-7890",
//       "_id": "684b1fd39bf638816f8e959e"
//     },
//     "year": 2010,
//   }
// ]

export default function Page() {
  const { data, isError, isLoading, isSuccess } = useGetAllMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos. Please try again.</div>;
  }

  if (isSuccess && data?.length === 0) {
    return <p>No movies found.</p>;
  }
  console.log("data", data);

  return (
    <div>
      {
        data && <MovieList movies={data} />
      }
    </div>
  )
}
