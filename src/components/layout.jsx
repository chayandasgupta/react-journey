import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9fafb", // soft light background
        fontFamily: "Segoe UI, Roboto, sans-serif",
      }}
    >
      <Navbar />

      <main
        style={{
          flex: 1,
          padding: "24px",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          color: "black"
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
