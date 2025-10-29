export default async function CommentPage() {
  await new Promise(resolve =>
    setTimeout(() => {
      resolve("Resolving");
    }, 4000)
  )

  return (
    <div className="border p-[10rem] w-[30rem]">
      Comment Page
    </div>
  )
}

