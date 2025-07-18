import { Link } from "react-router-dom";

const posts = [
  { id: "1", title: "React Basics" },
  { id: "2", title: "Advanced Routing" }
];

export default function Home() {
  return (
    <div>
      <h1>📚 Blog Home</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
