import { redirect } from "next/navigation";

interface MovieDetailPageProps {
  params: Promise<{ id: string }>
}

export default async function MovieDetailPage({ params }: MovieDetailPageProps) {
  const { id } = await params;

  const movieId = parseInt(id, 10);
  if (isNaN(movieId)) {
    redirect("/login");
  }

  return (
    <div>
      Movie Detail Page {movieId}
    </div>
  )
}
