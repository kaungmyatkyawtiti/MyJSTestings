import { Director, Movie } from "@/app/movies/types/movies";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ApiResponse<T> {
  message: string;
  data: T;
}

type NewDirector = Omit<Director, "_id">;
export type NewMovie = Omit<Movie, "_id" | "director"> & {
  director: NewDirector
};

export const moviesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),

  reducerPath: "moviesApi",

  tagTypes: ["Movie"],

  endpoints: (build) => ({
    getAllMovies: build.query<Movie[], void>({
      query: () => `/movies`,
      providesTags: ['Movie'],
      transformResponse: (response: ApiResponse<Movie[]>, meta, arg) => response.data,
    }),
    saveMovie: build.mutation<Movie, NewMovie>({
      query: (movie: Movie) => ({
        url: `/movies`,
        method: 'POST',
        body: movie,
      }),
      invalidatesTags: ['Movie'],
      transformResponse: (response: ApiResponse<Movie>, meta, arg) => response.data,
    })
  })
})

export const {
  useGetAllMoviesQuery,
  useSaveMovieMutation,
} = moviesApiSlice;
