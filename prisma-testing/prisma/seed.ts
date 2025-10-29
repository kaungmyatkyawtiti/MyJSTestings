import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";

const prisma = new PrismaClient();

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "Inception",
      description: "This is bad",
      genre: "comedy",
      releaseDate: new Date("2010-06-22"),
      rating: 6.5
    }
  });
  console.log("newMovie", newMovie);
}

async function createMultipleMovie() {
  const newMovie = await prisma.movie.createMany({
    data: [
      {
        title: "Bad Movie",
        description: "This is bad movie",
        genre: "comedy",
        releaseDate: new Date("2006-06-22"), rating: 7
      },
      {
        title: "Idk Movie",
        description: "This is idk",
        genre: "comedy",
        releaseDate: new Date("2010-07-10"),
        rating: 6.5
      }
    ]
  });
  console.log("newMovie", newMovie);
}

async function getAllMovies() {
  const movies = await prisma.movie.findMany();
  console.log("movies", movies);
}

async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({
    where: { id: movieId }
  });
  console.log("movie", movie);
}

async function updateMovie(
  movieId: number,
  updateTitle: string,
  updateDesc: string,
) {
  const updatedMovie = await prisma.movie.update({
    where: { id: movieId },
    data: {
      title: updateTitle,
      description: updateDesc,
    }
  });
  console.log("updatedMoive", updatedMovie);
}

async function deleteMovie(movieId: number) {
  const deletedMovie = await prisma.movie.delete({
    where: { id: movieId },
  });
  console.log("deletedMovie", deletedMovie);
}

async function main() {
  // await createMovie();
  // await createMultipleMovie();
  // await getAllMovies();
  // await getMovieById(2);
  // await updateMovie(
  //   2,
  //   "Update Movie",
  //   "Update Description"
  // )
  await deleteMovie(3);
}

main()
  .catch(async e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
