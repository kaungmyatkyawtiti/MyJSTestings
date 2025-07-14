'use client';

import { useParams } from "next/navigation";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      Movie Detail Page {id}
    </div>
  )
}
