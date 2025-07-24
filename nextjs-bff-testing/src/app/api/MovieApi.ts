import { Movie } from "../types/movies";
import axiosInstance from "../axiosInstance";

interface ApiResponse<T> {
  message: string;
  data: T;
}

export async function getAllMovies(): Promise<Movie[]> {
  try {
    const movieResponse = await axiosInstance.get<ApiResponse<Movie[]>>("api/movies");
    const { data: movies } = movieResponse.data;
    return movies;
  } catch (error) {
    console.error("error fetch getAllMovies", error);
    throw error;
  }
}

export default async function getMovieById(movieId: string): Promise<Movie> {
  try {
    const movieResponse = await axiosInstance.get<ApiResponse<Movie>>(`api/movies/${movieId}`);
    const { data: movie } = movieResponse.data;
    return movie;
  } catch (error) {
    console.error("error fetching getMovieById", error);
    throw error;
  }
}
