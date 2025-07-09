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
    getAllTodos: build.query<TodoApiResponse, void>({
      query: () => `/todos`,
    }),
    getTodoById: build.query<TodoApiResponse, number>({
      query: (id: number) => `/todos/${id}`
    }),
  }),
})

export const { useGetAllTodosQuery, useGetTodoByIdQuery } = todoApiSlice;
