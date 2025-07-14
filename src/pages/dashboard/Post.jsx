import { Link, useParams } from "react-router-dom";

const BlogPosts = {
  "first-blog-post": {
    title: "First Blog Post",
    description: "Lorem ipsum dolor sit amet, consectetur adip.",
  },
  "second-blog-post": {
    title: "Second Blog Post",
    description: "Hello React Router v6",
  },
};

export default function Post() {
  const { slug } = useParams();
  const post = BlogPosts[slug];
  if(!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <div style={{
        color: "black",
      }}>
        <Link to="/dashboard" style={{
          marginRight:"10px",
        }}>Dashboard</Link>
        <span>|</span>
        <Link to="/dashboard/posts" style={{
          margin:"0px 10px",
        }}>Posts</Link> 
        <span>|</span>
        <span style={{
          color:"gray",
          marginLeft: "10px",
        }}>{title}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
