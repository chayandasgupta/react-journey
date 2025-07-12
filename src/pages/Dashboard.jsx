import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>👤 Admin Dashboard</h1>
      <nav>
        <Link to="posts">Manage Posts</Link>
      </nav>
      <Outlet />
    </div>
  );
}
