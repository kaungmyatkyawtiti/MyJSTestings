interface Blog {
  author: string;
  category: string;
  content: string;
  date: string;
  id: number;
  title: string;
}

const apiUrl = "https://api.vercel.app/blo";

export default async function ServerPage() {
  const resp = await fetch(apiUrl);
  const posts: Blog[] = await resp.json();
  console.log("json", posts);

  return (
    <div>
      {
        posts.map(post =>
          <div key={post.id}>
            author: {post.author} <br />
            category: {post.category} <br />
            content: {post.content}
          </div>
        )
      }
    </div >
  )
}

