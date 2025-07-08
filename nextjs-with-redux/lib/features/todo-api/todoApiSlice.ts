import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  _id: number,
  title: string,
  completed: boolean,
}

export interface TodoApiResponse {
  message: string,
  data: Todo[],
}

export const todoApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),

  reducerPath: "todoApi",

  endpoints: (build) => ({
    getTodos: build.query<TodoApiResponse, void>({
      query: () => `/todos`,
    }),
  }),
})

export const { useGetTodosQuery } = todoApiSlice;
