import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}
