import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  _id: number,
  title: string,
  completed: boolean,
}

export type NewTodo = Omit<Todo, "_id">

interface ApiResponse<T> {
  message: string,
  data: T,
}

export const todoApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),

  reducerPath: "todoApi",

  tagTypes: ['Todo'],

  endpoints: (build) => ({
    getAllTodos: build.query<Todo[], void>({
      query: () => `/todos`,
      providesTags: ['Todo'],
      transformResponse: (response: ApiResponse<Todo[]>, meta, arg) => {
        console.log("transform to", response);
        return response.data;
      },
    }),
    getTodoById: build.query<Todo, number>({
      query: (id: number) => `/todos/${id}`,
      transformResponse: (response: ApiResponse<Todo>) => response.data,
    }),
    saveTodo: build.mutation<Todo, NewTodo>({
      query: (todo: Todo) => ({
        url: `/todos`,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: ApiResponse<Todo>) => response.data,
    }),
    updateTodoById: build.mutation<Todo, Todo>({
      query: (todo: Todo) => ({
        url: `/todos/${todo._id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: ApiResponse<Todo>) => response.data,
    }),
    deleteTodoById: build.mutation<Todo, number>({
      query: (todoId: number) => ({
        url: `/todos/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: ApiResponse<Todo>) => response.data,
    })
  }),
})

export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  useSaveTodoMutation,
  useUpdateTodoByIdMutation,
  useDeleteTodoByIdMutation,
} = todoApiSlice;
