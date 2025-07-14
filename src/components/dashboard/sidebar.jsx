import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("loggedIn");
    navigate("/");
  }
  
  const linkStyle = (active) => ({
    padding: "10px 16px",
    marginBottom: "8px",
    borderRadius: "6px",
    textDecoration: "none",
    color: active ? "#2563eb" : "#374151", // blue-600 or gray-700
    backgroundColor: active ? "#e0edff" : "transparent",
    fontWeight: active ? "600" : "500",
    transition: "background-color 0.2s ease, color 0.2s ease",
    display: "block",
  });

  return (
    <aside
      style={{
        width: "260px",
        height: "100vh",
        padding: "24px 16px",
        backgroundColor: "#f3f4f6", // gray-100
        borderRight: "1px solid #e5e7eb", // gray-200
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "24px",
          color: "#111827", // gray-900
        }}
      >
        Dashboard
      </h2>

      <nav>
        <Link to="/dashboard" style={linkStyle(pathname === "/dashboard")}>
          Home
        </Link>
        <Link
          to="/dashboard/posts"
          style={linkStyle(pathname === "/dashboard/posts")}
        >
          Posts
        </Link>
        <span
          style={{
            padding: "10px 16px",
            marginBottom: "8px",
            borderRadius: "6px",
            textDecoration: "none",
            color: "#374151", // blue-600 or gray-700
            backgroundColor: "transparent",
            fontWeight: "500",
            transition: "background-color 0.2s ease, color 0.2s ease",
            display: "block",
            cursor: "pointer",
          }}
          onClick={logout}
        >
          Logout
        </span>
      </nav>
    </aside>
  );
}
