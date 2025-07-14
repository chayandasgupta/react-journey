import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <>
      <h2>📝 List of Posts for Admin</h2>
      <Outlet />
    </>
  );
}
