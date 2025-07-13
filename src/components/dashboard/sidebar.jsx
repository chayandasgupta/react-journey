import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-200 h-screen">
      <h2 className="font-bold text-lg mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        <Link to="/dashboard">Home</Link>
        <Link to="/dashboard/posts">Posts</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}
