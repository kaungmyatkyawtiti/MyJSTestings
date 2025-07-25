import { Director, Movie } from "../types/movies";
import axiosInstance from "../axiosInstance";

interface ApiResponse<T> {
  message: string;
  data: T;
}

export type NewDirector = Omit<Director, "_id">;
export type NewMovie = Omit<Movie, "_id" | "director"> & {
  director: NewDirector
};

export async function getAllMovies(): Promise<Movie[]> {
  try {
    const { data } = await axiosInstance.get<ApiResponse<Movie[]>>("api/movies");
    // console.log(data);
    return data.data;
  } catch (error) {
    console.error("error fetch getAllMovies", error);
    throw error;
  }
}

export async function getMovieById(movieId: string): Promise<Movie> {
  try {
    const { data } = await axiosInstance.get<ApiResponse<Movie>>(`api/movies/${movieId}`);
    return data.data;
  } catch (error) {
    console.error("error fetching getMovieById", error);
    throw error;
  }
}

export async function saveMovie(movie: NewMovie): Promise<Movie> {
  try {
    const { data } = await axiosInstance.post<ApiResponse<Movie>>("api/movies", movie);
    return data.data;
  } catch (error) {
    console.error("error fetching saveMovie", error);
    throw error;
  }
}
