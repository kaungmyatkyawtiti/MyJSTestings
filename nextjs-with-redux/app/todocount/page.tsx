'use client';

import { useGetAllTodosQuery } from "@/lib/features/todo-api/todoApiSlice";

export default function Page() {
  const { data, isError, isLoading, isSuccess } = useGetAllTodosQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading todos. Please try again.</div>;
  }

  return (
    <div>
      {
        data && <h1>Todo Count: {data.length}</h1>
      }
      {
        !data && <p>No todos found.</p>
      }

    </div>
  )
}
