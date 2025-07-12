import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  return (
    <div>
      <h2>📖 Reading Post ID: {postId}</h2>
    </div>
  );
}
