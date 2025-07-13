import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const About = lazy(() => new Promise(resolve => setTimeout(() => resolve(import("./pages/About")), 2000)));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const Posts = lazy(() => import("./pages/dashboard/Posts"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Locading....</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="posts" element={<Posts />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
