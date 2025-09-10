import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  _id: number,
  title: string,
  completed: boolean,
}

export type NewTodo = Omit<Todo, "_id">

export const todoApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api" }),

  reducerPath: "todoApi",

  tagTypes: ['Todo'],

  endpoints: (build) => ({
    getAllTodos: build.query<Todo[], void>({
      query: () => `/todos`,
      providesTags: ['Todo'],
      transformResponse: (response: { data: Todo[] }, meta, arg) => {
        console.log("transform to", response);
        return response.data;
      },
    }),
    getTodoById: build.query<Todo, number>({
      query: (id) => `/todos/${id}`,
      transformResponse: (response: { data: Todo }) => response.data,
    }),
    saveTodo: build.mutation<Todo, NewTodo>({
      query: (todo) => ({
        url: `/todos`,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: { data: Todo }) => response.data,
    }),
    updateTodoById: build.mutation<Todo, Todo>({
      query: (todo) => ({
        url: `/todos/${todo._id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: { data: Todo }) => response.data,
    }),
    deleteTodoById: build.mutation<Todo, number>({
      query: (todoId) => ({
        url: `/todos/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Todo'],
      transformResponse: (response: { data: Todo }) => response.data,
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
