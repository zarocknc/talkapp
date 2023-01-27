const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
}


export default async function PostsPage() {
  const posts = await fetchPost()
  return posts.slice(0,5).map(post => (
    <article key={posts.id}>
      <h2 >{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ))
    
}
